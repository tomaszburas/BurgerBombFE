import styled from 'styled-components';
import { AdminsItems } from './AdminsItems';
import { useEmit, useEventrixState } from 'eventrix';
import { AdminsAddForm } from './Form/AdminsAddForm';
import { Form } from 'types';
import { FormBox } from '../FormBox';

export const AdminsContainer = () => {
    const emit = useEmit();
    const [addForm] = useEventrixState<boolean>(Form.ADD);

    return (
        <Container>
            <button title="Add Admin" onClick={() => emit(Form.ADD, true)}>
                Add Admin
            </button>
            <div className="header">
                <p className="email">Email</p>
                <p className="role">Role</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <AdminsItems />
            </div>
            {addForm && (
                <FormBox name={Form.ADD}>
                    <AdminsAddForm />
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

    .email {
        width: 60%;
        margin-right: 1rem;
    }

    .role {
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
