import styled from 'styled-components';
import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';
import { Role } from 'types';
import { useEmit } from 'eventrix';

export const AdminsAddForm = () => {
    const emit = useEmit();
    const [form, setForm] = useState({
        email: '',
        password: '',
        role: Role.ADMIN.toString(),
    });

    const handlerAddForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOSTPORT}/admin`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email.trim(),
                password: form.password.trim(),
                role: form.role,
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        toast.success(data.message);
        emit('addForm', false);
        emit('users:add', data.user);
    };

    return (
        <Container>
            <form onSubmit={handlerAddForm}>
                <div className="input-box">
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        id="password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-box">
                    <span className="title">Role</span>
                    <select
                        name="role"
                        id="role"
                        value={form.role}
                        onChange={(e) =>
                            setForm({ ...form, role: e.target.value })
                        }
                        required>
                        <option value={Role.ADMIN}>{Role.ADMIN}</option>
                        <option value={Role.SUPER_ADMIN}>
                            {Role.SUPER_ADMIN}
                        </option>
                    </select>
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

        .title {
            position: absolute;
            left: 10px;
            top: 12px;
            width: max-content;
            transition: all 0.2s ease-in-out;
            padding: 5px 7px;
            border-radius: 10px;
            pointer-events: none;

            &:focus,
            &:not(:placeholder-shown) {
                top: -14px;
                font-size: 13px;
            }

            &:focus {
                font-weight: bolder;
            }
        }

        select {
            margin-top: 0.7rem;
        }

        .button-wrapper {
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }
    }
`;
