import styled from 'styled-components';
import { useState } from 'react';
import { AddBurgerToBasket } from './AddBurgerToBasket';
import { HOST } from '../../config';
import { BurgerIngredient } from 'types';
import { ingredientsName } from '../../utils/ingredients-name';
import { ConfirmationPopUp } from '../ConfirmationPopUp';
import { useNavigate } from 'react-router-dom';

interface Props {
    id: string;
    name: string;
    price: number;
    image: string;
    ingredients: BurgerIngredient[];
}

export const Burger = ({ id, name, price, image, ingredients }: Props) => {
    const navigate = useNavigate();
    const [addBtn, setAddBtn] = useState(false);
    const [popUp, setPopUp] = useState(false);

    const handlePopUp = () => {
        setPopUp(false);
        navigate('/basket');
    };

    return (
        <Container>
            <div className="top">
                <img src={`${HOST}/../images/${image}`} alt={`${name} img`} />
            </div>
            <div
                className="center"
                title="Add to basket"
                onClick={() => setAddBtn(true)}>
                <p className="burger-name">{name.toUpperCase()} BURGER</p>
                <p className="burger-price">
                    $ {price}
                    <i className="bx bx-plus" />
                </p>
            </div>
            <div className="bottom">{ingredientsName(ingredients)}</div>
            {addBtn && (
                <AddBurgerToBasket
                    setAddBtn={setAddBtn}
                    id={id}
                    name={name}
                    price={price}
                    image={image}
                    ingredients={ingredients}
                    setPopUp={setPopUp}
                />
            )}
            {popUp && (
                <ConfirmationPopUp
                    title={`Do you want to go to the basket?`}
                    setPopUp={setPopUp}
                    handler={handlePopUp}
                />
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        text-align: center;
        img {
            width: 80%;
        }
    }

    .center {
        padding: 1rem;
        background-color: ${(props) => props.theme.colors.eden};
        color: ${(props) => props.theme.colors.yellow};
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        cursor: pointer;

        .burger-price {
            display: flex;
            align-items: center;

            .bx-plus {
                margin-left: 1rem;
                padding: 0.2rem;
                background-color: ${(props) => props.theme.colors.yellow};
                color: ${(props) => props.theme.colors.eden};
                border-radius: 0.5rem;
            }
        }
    }

    .bottom {
        margin-bottom: 1rem;
        padding: 0 1rem;
        width: 100%;
    }

    @media only screen and (max-width: 1500px) {
        width: 45%;
    }

    @media only screen and (max-width: 1000px) {
        width: 70%;

        .top {
            img {
                width: 60%;
            }
        }
    }

    @media only screen and (max-width: 650px) {
        width: 100%;

        .top {
            img {
                width: 60%;
            }
        }
    }
`;
