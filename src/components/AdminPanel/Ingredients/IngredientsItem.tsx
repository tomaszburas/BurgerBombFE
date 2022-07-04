import styled from 'styled-components';
import { useState } from 'react';
import { HOSTPORT } from '../../../config';
import { toast } from 'react-toastify';
import { ConfirmationPopUp } from '../ConfirmationPopUp';
import { EditBox } from '../EditBox';
import { IngredientsEditForm } from './IngredientsEditForm';
import { useEmit } from 'eventrix';

interface Props {
    id: string;
    name: string;
    price: number;
}

export const IngredientsItem = ({ id, name, price }: Props) => {
    const [removePopUp, setRemovePopUp] = useState(false);
    const [editBg, setEditBg] = useState(false);
    const emit = useEmit();

    const handlerRemoveBtn = async () => {
        const res = await fetch(`${HOSTPORT}/ingredient/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        setRemovePopUp(false);
        if (data.success) {
            emit('ingredients:remove', data.id);
            toast.success(data.message);
        } else {
            toast.error(data.message);
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
                    title={`Are you sure you want to remove ${name}?`}
                    setPopUp={setRemovePopUp}
                    handlerRemoveBtn={handlerRemoveBtn}
                />
            )}
            {editBg && (
                <EditBox setPopUp={setEditBg}>
                    <IngredientsEditForm
                        id={id}
                        name={name}
                        price={price}
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
