import styled from 'styled-components';
import { AddBox } from '../AddBox';
import { CouponsItem } from './CouponsItem';
import { useEmit, useEventrixState } from 'eventrix';
import { CouponsAddForm } from './CouponsAddForm';
import { Form } from '../../../types/formEnum';

export const CouponsContainer = () => {
    const emit = useEmit();
    const [addForm] = useEventrixState<boolean>('addForm');

    return (
        <Container>
            <button title="Add Coupon" onClick={() => emit('addForm', true)}>
                Add Coupon
            </button>
            <div className="header">
                <p className="name">Name</p>
                <p className="value">Value</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <CouponsItem />
            </div>
            {addForm && (
                <AddBox>
                    <CouponsAddForm />
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
