import styled from 'styled-components';
import { useState } from 'react';
import { API_URL } from '../../../config';
import { toast } from 'react-toastify';
import { ConfirmationPopUp } from '../../ConfirmationPopUp';
import { IngredientsEditForm } from './Form/IngredientsEditForm';
import { useEmit } from 'eventrix';
import { Form } from 'types';
import { FormBox } from '../../FormBox';
import { toastOptions } from '../../../utils/toastOptions';

interface Props {
    id: string;
    name: string;
    price: number;
}

export const IngredientsItem = ({ id, name, price }: Props) => {
    const emit = useEmit();
    const [removePopUp, setRemovePopUp] = useState(false);
    const [editForm, setEditForm] = useState(false);

    const handleRemove = async () => {
        setRemovePopUp(false);
        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/ingredient/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        if (data.success) {
            emit('ingredients:remove', data.id);
            emit('burgers:set', data.burgers);
            toast.update(load, {
                ...toastOptions,
                render: data.message,
                type: 'success',
            });
        } else {
            toast.update(load, {
                ...toastOptions,
                render: data.message,
                type: 'error',
            });
        }
    };

    return (
        <Container>
            <p className="name">{name}</p>
            <p className="price">$ {price}</p>
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
                    title={`Are you sure you want to remove ${name} ingredient?`}
                    setPopUp={setRemovePopUp}
                    handler={handleRemove}
                />
            )}
            {editForm && (
                <FormBox name={Form.EDIT} state={setEditForm}>
                    <IngredientsEditForm
                        id={id}
                        name={name}
                        price={price}
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
