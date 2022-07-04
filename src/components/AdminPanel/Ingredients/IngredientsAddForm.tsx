import styled from 'styled-components';
import { useEmit } from 'eventrix';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';

export const IngredientsAddForm = () => {
    const emit = useEmit();
    const [form, setForm] = useState({
        name: '',
        price: '',
    });

    const handlerAddForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOSTPORT}/ingredient`, {
            method: 'POST',
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

        toast.success(data.message);
        emit('addForm', false);
    };

    return (
        <Container>
            <form onSubmit={handlerAddForm}>
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
                            setForm({ ...form, price: e.target.value })
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
