import styled from 'styled-components';
import { NavItems } from '../NavItems';

export const AdminsItem = () => {
    return (
        <Container>
            <p className="email">tomash194@gmail.com</p>
            <p className="role">Super Admin</p>
            <div className="nav">
                <NavItems />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 0 1rem;
    margin-bottom: 0.5rem;

    .nav {
        display: flex;
        justify-content: center;
    }
`;
