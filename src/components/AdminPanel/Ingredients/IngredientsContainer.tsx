import styled from 'styled-components';
import { useEmit, useEventrixState } from 'eventrix';
import { IngredientsAddForm } from './Form/IngredientsAddForm';
import { IngredientsItems } from './IngredientsItems';
import { Form } from 'types';
import { FormBox } from '../FormBox';

export const IngredientsContainer = () => {
    const emit = useEmit();
    const [addForm] = useEventrixState<boolean>(Form.ADD);

    return (
        <Container>
            <button title="Add Ingredient" onClick={() => emit(Form.ADD, true)}>
                Add Ingredient
            </button>
            <div className="header">
                <p className="name">Name</p>
                <p className="price">Price</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <IngredientsItems />
            </div>
            {addForm && (
                <FormBox name={Form.ADD}>
                    <IngredientsAddForm />
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

    .name {
        width: 70%;
        margin-right: 1rem;
    }

    .price {
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
