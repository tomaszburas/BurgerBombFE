import styled from 'styled-components';
import { AdminsItem } from './AdminsItem';
import { useState } from 'react';
import { AddBox } from '../AddBox';

export const AdminsContainer = () => {
    const [addBtn, setAddBtn] = useState(false);

    return (
        <Container>
            <button title="Add AdminPanel" onClick={() => setAddBtn(true)}>
                Add Admin
            </button>
            <div className="header">
                <p className="email">Email</p>
                <p className="role">Role</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <AdminsItem />
                <AdminsItem />
                <AdminsItem />
                <AdminsItem />
                <AdminsItem />
                <AdminsItem />
                <AdminsItem />
                <AdminsItem />
                <AdminsItem />
            </div>
            {addBtn ? <AddBox setAddBtn={setAddBtn} title="admins" /> : null}
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
