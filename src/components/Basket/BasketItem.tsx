import styled from 'styled-components';

export const BasketItem = () => {
    return (
        <Container>
            <div className="left">
                <p className="burger">1 x CRISBY BURGER</p>
                <p className="ingredient">+ tomato</p>
                <p className="ingredient">+ cucumber</p>
            </div>
            <div className="center">
                <button className="plus" title="Add">
                    +
                </button>
                <button className="minus" title="Remove">
                    -
                </button>
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

    .left {
        width: 60%;

        .ingredient {
            margin-left: 1.5rem;
        }
    }
    .center {
        width: 25%;
        text-align: center;

        .plus {
            padding: 0.3rem 0.5rem;
            background-color: ${(props) => props.theme.colors.eden};
            color: ${(props) => props.theme.colors.cream};
            font-size: ${(props) => props.theme.fontSize.base};
            font-weight: bold;
            border: none;
            cursor: pointer;
            border-radius: 0;
        }

        .minus {
            padding: 0.3rem 0.7rem;
            background-color: ${(props) => props.theme.colors.red};
            color: ${(props) => props.theme.colors.cream};
            font-size: ${(props) => props.theme.fontSize.base};
            font-weight: bold;
            border: none;
            cursor: pointer;
            border-radius: 0;
        }
    }
    .right {
        width: 15%;
        text-align: right;
    }
`;
