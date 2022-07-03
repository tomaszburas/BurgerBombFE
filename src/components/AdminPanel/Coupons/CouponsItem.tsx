import styled from 'styled-components';
import { NavItems } from '../NavItems';

export const CouponsItem = () => {
    return (
        <Container>
            <p className="name">Wer86767fdsg</p>
            <p className="value">10%</p>
            <div className="nav">
                <i className="bx bxs-edit" title="Edit" />
                <i className="bx bx-trash" title="Remove" />
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
