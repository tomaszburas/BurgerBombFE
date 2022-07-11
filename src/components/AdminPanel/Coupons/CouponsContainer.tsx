import styled from 'styled-components';
import { useEmit, useEventrixState } from 'eventrix';
import { CouponsAddForm } from './Form/CouponsAddForm';
import { CouponsItems } from './CouponsItems';
import { Form } from 'types';
import { FormBox } from '../../FormBox';

export const CouponsContainer = () => {
    const emit = useEmit();
    const [addForm] = useEventrixState<boolean>(Form.ADD);

    return (
        <Container>
            <button title="Add Coupon" onClick={() => emit(Form.ADD, true)}>
                Add Coupon
            </button>
            <div className="header">
                <p className="name">Name</p>
                <p className="value">Value</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <CouponsItems />
            </div>
            {addForm && (
                <FormBox name={Form.ADD}>
                    <CouponsAddForm />
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
        width: 60%;
        margin-right: 1rem;
    }

    .value {
        width: 30%;
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
