import styled from 'styled-components';
import { ConfirmationPopUp } from '../../ConfirmationPopUp';
import { useState } from 'react';
import { HOST } from '../../../config';
import { toast } from 'react-toastify';
import { AdminsEditForm } from './Form/AdminsEditForm';
import { useEmit } from 'eventrix';
import { Form } from 'types';
import { FormBox } from '../../FormBox';

interface Props {
    id: string;
    email: string;
    role: string;
}

export const AdminsItem = ({ id, email, role }: Props) => {
    const emit = useEmit();
    const [removePopUp, setRemovePopUp] = useState(false);
    const [editForm, setEditForm] = useState(false);

    const handleRemove = async () => {
        const res = await fetch(`${HOST}/admin/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        setRemovePopUp(false);
        if (data.success) {
            emit('users:remove', id);
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
    };

    return (
        <Container>
            <p className="email">{email}</p>
            <p className="role">{role}</p>
            <div className="nav">
                <i
                    className="bx bxs-edit"
                    title="Edit"
                    onClick={() => setEditForm(true)}
                />
                <i
                    className="bx bx-trash"
                    title="Remove"
                    onClick={() => setRemovePopUp(true)}
                />
            </div>
            {removePopUp && (
                <ConfirmationPopUp
                    title={`Are you sure you want to remove ${email} user?`}
                    setPopUp={setRemovePopUp}
                    handler={handleRemove}
                />
            )}
            {editForm && (
                <FormBox name={Form.EDIT} state={setEditForm}>
                    <AdminsEditForm
                        id={id}
                        email={email}
                        role={role}
                        state={setEditForm}
                    />
                </FormBox>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 0 1rem;
    margin-bottom: 0.5rem;

    .nav {
        display: flex;
        justify-content: center;
    }
`;
