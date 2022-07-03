import styled from 'styled-components';
import { ConfirmationPopUp } from '../ConfirmationPopUp';
import { useState } from 'react';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';
import { AddBox } from '../AddBox';
import { AdminsEditForm } from './AdminsEditForm';
import { useEmit, useEventrixState } from 'eventrix';
import { Form } from '../../../types/formEnum';
import { EditBox } from '../EditBox';

interface Props {
    id: string;
    email: string;
    role: string;
}

export const AdminsItem = ({ id, email, role }: Props) => {
    const [removePopUp, setRemovePopUp] = useState(false);
    const [editBg, setEditBg] = useState(false);

    const handlerRemoveBtn = async () => {
        const res = await fetch(`${HOSTPORT}/admin/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        setRemovePopUp(false);
        if (data.success) {
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
                    onClick={() => setEditBg(true)}
                />
                <i
                    className="bx bx-trash"
                    title="Remove"
                    onClick={() => setRemovePopUp(true)}
                />
            </div>
            {removePopUp && (
                <ConfirmationPopUp
                    title={`Are you sure you want to remove user ${email}?`}
                    setPopUp={setRemovePopUp}
                    handlerRemoveBtn={handlerRemoveBtn}
                />
            )}
            {editBg && (
                <EditBox setPopUp={setEditBg}>
                    <AdminsEditForm
                        id={id}
                        email={email}
                        role={role}
                        setPopUp={setEditBg}
                    />
                </EditBox>
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
