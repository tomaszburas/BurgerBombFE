import styled from 'styled-components';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { useEmit } from 'eventrix';

interface Props {
    id: string;
    name: string;
    price: number;
    setPopUp: (param: boolean) => void;
}

export const IngredientsEditForm = ({ id, name, price, setPopUp }: Props) => {
    const [form, setForm] = useState({
        name,
        price,
    });
    const emit = useEmit();

    const handlerEditForm = async (e: FormEvent) => {
        e.preventDefault();

        if (name === form.name && price === form.price) {
            toast.warning('Please update data');
            return;
        }

        const res = await fetch(`${HOSTPORT}/ingredient/${id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name.trim(),
                price: Number(form.price),
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        emit('ingredients:update', data.ingredient);
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
                        name="name"
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
                        id="price"
                        name="price"
                        value={form.price}
                        onChange={(e) =>
                            setForm({ ...form, price: Number(e.target.value) })
                        }
                        required
                    />
                    <label htmlFor="price">Price</label>
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
