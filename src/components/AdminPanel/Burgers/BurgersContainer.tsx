import { useState } from 'react';
import { AddBox } from '../AddBox';
import styled from 'styled-components';
import { BurgersItem } from './BurgersItem';

export const BurgersContainer = () => {
    const [addBtn, setAddBtn] = useState(false);

    return (
        <Container>
            <button title="Add Admin" onClick={() => setAddBtn(true)}>
                Add Burger
            </button>
            <div className="header">
                <p className="img">Image</p>
                <p className="name">Name</p>
                <p className="ingredients">Ingredients</p>
                <p className="price">Price</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <BurgersItem />
                <BurgersItem />
                <BurgersItem />
                <BurgersItem />
            </div>
            {addBtn ? <AddBox setAddBtn={setAddBtn} title="burgers" /> : null}
        </Container>
    );
};

const Container = styled.div`
    height: 100%;

    .header {
        width: 100%;
        display: flex;
        padding: 0.5rem 1rem;
        background-color: ${(props) => props.theme.colors.red};
        font-weight: 500;
    }

    .img {
        width: 10%;
        margin-right: 1rem;
    }

    .name {
        width: 30%;
        margin-right: 1rem;
    }

    .ingredients {
        width: 35%;
        margin-right: 1rem;
    }

    .price {
        width: 15%;
        margin-right: 1rem;
    }

    .nav {
        width: 10%;
        margin-right: 1rem;
    }

    .data-wrapper {
        margin-top: 0.5rem;
        height: calc(100% - ${(props) => props.theme.fontSize.base} - 4.5rem);
        overflow: auto;
    }

    button {
        height: 2.5rem;
        background-color: ${(props) => props.theme.colors.eden};
        border: none;
        border-radius: 0.5rem;
        font-size: ${(props) => props.theme.fontSize.base};
        color: ${(props) => props.theme.colors.cream};
        padding: 0 1rem;
        cursor: pointer;
        margin-bottom: 0.5rem;
    }
`;
