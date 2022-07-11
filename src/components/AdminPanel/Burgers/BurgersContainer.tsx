import styled from 'styled-components';
import { useEmit, useEventrixState } from 'eventrix';
import { BurgersAddForm } from './Form/BurgersAddForm';
import { BurgersItems } from './BurgersItems';
import { Form } from 'types';
import { FormBox } from '../../FormBox';

export const BurgersContainer = () => {
    const emit = useEmit();
    const [addForm] = useEventrixState<boolean>(Form.ADD);

    return (
        <Container>
            <button title="Add Burger" onClick={() => emit(Form.ADD, true)}>
                Add Burger
            </button>
            <div className="header">
                <p className="menu">Menu</p>
                <p className="img">Img</p>
                <p className="name">Name</p>
                <p className="ingredients">Ingredients</p>
                <p className="price">Price</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <BurgersItems />
            </div>
            {addForm && (
                <FormBox name={Form.ADD}>
                    <BurgersAddForm />
                </FormBox>
            )}
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

    .menu {
        width: 10%;
        margin-right: 1rem;
    }

    .img {
        width: 10%;
        margin-right: 1rem;
    }

    .name {
        width: 25%;
        margin-right: 1rem;
    }

    .ingredients {
        width: 30%;
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
        margin-bottom: 0.5rem;
    }
`;
