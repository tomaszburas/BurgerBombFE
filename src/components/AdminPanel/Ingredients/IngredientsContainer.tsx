import styled from 'styled-components';
import { AddBox } from '../AddBox';
import { useEmit, useEventrixState } from 'eventrix';
import { IngredientsAddForm } from './IngredientsAddForm';
import { IngredientsItems } from './IngredientsItems';

export const IngredientsContainer = () => {
    const emit = useEmit();
    const [addForm] = useEventrixState<boolean>('addForm');

    return (
        <Container>
            <button
                title="Add Ingredient"
                onClick={() => emit('addForm', true)}>
                Add Ingredient
            </button>
            <div className="header">
                <p className="name">Name</p>
                <p className="price">Price</p>
                <p className="quantity">Quantity</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <IngredientsItems />
            </div>
            {addForm && (
                <AddBox>
                    <IngredientsAddForm />
                </AddBox>
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

    .name {
        width: 50%;
        margin-right: 1rem;
    }

    .price {
        width: 20%;
        margin-right: 1rem;
    }

    .quantity {
        width: 20%;
        margin-right: 1rem;
    }

    .nav {
        width: 10%;
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
