import styled from 'styled-components';

export const SummaryItem = () => {
    return (
        <Container>
            <div className="left">
                <p className="burger">1 x CRISBY BURGER</p>
                <p className="ingredient">+ tomato</p>
                <p className="ingredient">+ cucumber</p>
            </div>
            <div className="right">
                <p className="price">$ 9</p>
                <p className="price">$ 2</p>
                <p className="price">$ 2</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .ingredient {
        margin-left: 1.5rem;
    }
`;
