import styled from 'styled-components';
import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';

interface Props {
    id: string;
    name: string;
    value: number;
    setPopUp: (param: boolean) => void;
}

export const CouponsEditForm = ({ id, name, value, setPopUp }: Props) => {
    const [form, setForm] = useState({
        name,
        value,
    });
    const emit = useEmit();

    const handlerEditForm = async (e: FormEvent) => {
        e.preventDefault();

        if (name === form.name && value === form.value) {
            toast.warning('Please update data');
            return;
        }

        const res = await fetch(`${HOSTPORT}/coupon/${id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name.trim(),
                value: Number(form.value),
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        emit('coupons:update', data.coupon);
        setPopUp(false);
        toast.success(data.message);
    };

    return (
        <Container>
            <form onSubmit={handlerEditForm}>
                <div className="input-box">
                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-box">
                    <input
                        type="number"
                        id="value"
                        min="0"
                        max="100"
                        value={form.value}
                        onChange={(e) =>
                            setForm({ ...form, value: Number(e.target.value) })
                        }
                        required
                    />
                    <label htmlFor="value">Value</label>
                </div>
                <div className="button-wrapper">
                    <button title="Save">Save</button>
                </div>
            </form>
        </Container>
    );
};

const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;

        .button-wrapper {
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }
    }
`;
