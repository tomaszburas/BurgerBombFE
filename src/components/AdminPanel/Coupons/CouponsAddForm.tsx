import styled from 'styled-components';
import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';

export const CouponsAddForm = () => {
    const emit = useEmit();
    const [form, setForm] = useState({
        name: '',
        value: '',
    });

    const handlerAddForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOSTPORT}/coupon`, {
            method: 'POST',
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

        toast.success(data.message);
        emit('coupons:add', data.coupon);
        emit('addForm', false);
    };

    return (
        <Container>
            <form onSubmit={handlerAddForm}>
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
                            setForm({ ...form, value: e.target.value })
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
