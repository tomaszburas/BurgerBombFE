import styled from 'styled-components';
import { useState } from 'react';
import { AddBurgerToBasket } from './AddBurgerToBasket';

interface Props {
    name: string;
    price: number;
    image: string;
    ingredients: string;
}

export const Burger = ({ name, price, image, ingredients }: Props) => {
    const [addBtn, setAddBtn] = useState(false);

    return (
        <Container>
            <div className="top">
                <img src={image} alt="burger" />
            </div>
            <div
                className="center"
                title="Add to basket"
                onClick={() => setAddBtn(true)}>
                <p className="burger-name">{name} BURGER</p>
                <p className="burger-price">$ {price}</p>
            </div>
            <div className="bottom">{ingredients}</div>
            {addBtn ? (
                <AddBurgerToBasket
                    setAddBtn={setAddBtn}
                    name={name}
                    price={price}
                    image={image}
                    ingredients={ingredients}
                />
            ) : null}
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
        margin-bottom: 1rem;
        cursor: pointer;
    }

    .bottom {
        margin-bottom: 1rem;
    }
`;
