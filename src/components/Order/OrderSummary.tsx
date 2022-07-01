import styled from 'styled-components';

export const OrderSummary = () => {
    return (
        <Container>
            <div className="summary-row color-eden">
                <p className="title">Discount:</p>
                <p className="value">10%</p>
            </div>
            <div className="summary-row">
                <p className="title">Total Value:</p>
                <p className="value">$ 35</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;

    .summary-row {
        display: flex;
        justify-content: space-between;

        .title {
            margin-right: 2rem;
        }
    }

    .color-eden {
        color: ${(props) => props.theme.colors.eden};
    }
`;
