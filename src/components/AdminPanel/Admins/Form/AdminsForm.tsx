import { NewAdminEntity, Role, Form } from 'types';
import styled from 'styled-components';
import { FormEvent } from 'react';
import { LoaderData } from '../../../LoaderData';

interface Props {
    handler: (e: FormEvent) => void;
    name: Form;
    form: NewAdminEntity;
    setForm: (elements: NewAdminEntity) => void;
    loading: boolean;
}

export const AdminsForm = ({
    handler,
    form,
    setForm,
    name,
    loading,
}: Props) => {
    return (
        <Container>
            <form onSubmit={handler}>
                <div className="input-box">
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        required={name === Form.ADD}
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
                        required={name === Form.ADD}
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
                        required={name === Form.ADD}>
                        <option value={Role.ADMIN}>{Role.ADMIN}</option>
                        <option value={Role.SUPER_ADMIN}>
                            {Role.SUPER_ADMIN}
                        </option>
                    </select>
                </div>
                <div className="button-wrapper">
                    {loading ? (
                        <LoaderData width={30} height={30} />
                    ) : (
                        <button title="Save">Save</button>
                    )}
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
