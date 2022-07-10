import styled from 'styled-components';
import { useState } from 'react';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';
import { ConfirmationPopUp } from '../ConfirmationPopUp';
import { CouponsEditForm } from './Form/CouponsEditForm';
import { useEmit } from 'eventrix';
import { Form } from 'types';
import { FormBox } from '../FormBox';

interface Props {
    id: string;
    value: number;
    name: string;
}

export const CouponsItem = ({ id, value, name }: Props) => {
    const emit = useEmit();
    const [removePopUp, setRemovePopUp] = useState(false);
    const [editForm, setEditForm] = useState(false);

    const handleRemove = async () => {
        const res = await fetch(`${HOSTPORT}/coupon/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        setRemovePopUp(false);
        if (data.success) {
            emit('coupons:remove', data.id);
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
    };

    return (
        <Container>
            <p className="name">{name}</p>
            <p className="value">{value}%</p>
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
                    title={`Are you sure you want to remove ${name} coupon?`}
                    setPopUp={setRemovePopUp}
                    handler={handleRemove}
                />
            )}
            {editForm && (
                <FormBox name={Form.EDIT} state={setEditForm}>
                    <CouponsEditForm
                        id={id}
                        name={name}
                        value={value}
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
