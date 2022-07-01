import styled from 'styled-components';
import { NavItems } from '../NavItems';

export const IngredientsItem = () => {
    return (
        <Container>
            <p className="name">Cucumber</p>
            <p className="price">$ 2</p>
            <p className="quantity">20</p>
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
