import styled from 'styled-components';
import { Form, BurgerIngredient } from 'types';
import { HOSTPORT } from '../../../config';
import { useState } from 'react';
import { useEmit } from 'eventrix';
import { toast } from 'react-toastify';
import { ConfirmationPopUp } from '../ConfirmationPopUp';
import { FormBox } from '../FormBox';
import { BurgersEditForm } from './Form/BurgersEditForm';
import { ingredientsName } from '../../../utils/ingredients-name';

interface Props {
    id: string;
    name: string;
    price: number;
    ingredients: BurgerIngredient[];
    img: string;
    active: boolean;
}

export const BurgersItem = ({
    id,
    name,
    price,
    ingredients,
    img,
    active,
}: Props) => {
    const emit = useEmit();
    const [removePopUp, setRemovePopUp] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [activeInput, setActiveInput] = useState(active);

    const ingredientsId = () => {
        return ingredients.map((ingredient) => ingredient.id);
    };

    const handleActiveInput = async (e: any) => {
        const checked = e.target.checked;
        setActiveInput(checked);

        const res = await fetch(`${HOSTPORT}/burger/active/${id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ active: checked }),
        });

        const data = await res.json();

        if (data.success) {
            emit('burgers:updateActive', { id, checked });
        }
    };

    const handleRemove = async () => {
        const res = await fetch(`${HOSTPORT}/burger/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        setRemovePopUp(false);
        if (data.success) {
            emit('burgers:remove', data.id);
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
    };

    return (
        <Container>
            <div className="menu">
                <input
                    type="checkbox"
                    name="active"
                    className="active-checkbox"
                    checked={activeInput}
                    onChange={handleActiveInput}
                />
            </div>
            <div className="img">
                <img src={`${HOSTPORT}/../images/${img}`} alt={`${name} img`} />
            </div>
            <p className="name">{name} burger</p>
            <p className="ingredients">{ingredientsName(ingredients)}</p>
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
                    title={`Are you sure you want to remove ${name} burger?`}
                    setPopUp={setRemovePopUp}
                    handlerRemoveBtn={handleRemove}
                />
            )}
            {editForm && (
                <FormBox name={Form.EDIT} state={setEditForm}>
                    <BurgersEditForm
                        id={id}
                        name={name}
                        price={price}
                        active={activeInput}
                        ingredientsId={ingredientsId()}
                        state={setEditForm}
                    />
                </FormBox>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 0.5rem;

    .ingredients {
        font-size: ${(props) => props.theme.fontSize.sm};
    }

    .img {
        img {
            width: 40%;
        }
    }

    .nav {
        display: flex;
        justify-content: center;
        font-size: ${(props) => props.theme.fontSize.base};
    }

    .active-checkbox {
        width: 1rem;
        height: 1rem;
    }
`;
