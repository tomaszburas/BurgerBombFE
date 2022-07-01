import styled from 'styled-components';
import { AddAndRemoveBtns } from '../AddAndRemoveBtns';

interface Props {
    title?: string;
}

export const BasketItem = ({ title }: Props) => {
    return (
        <Container>
            <div className="left">
                <p className="burger">1 x CRISBY BURGER</p>
                <p className="ingredient">+ tomato</p>
                <p className="ingredient">+ cucumber</p>
            </div>
            {title !== 'summary' ? (
                <div className="center">
                    <AddAndRemoveBtns />
                </div>
            ) : null}
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
    }

    .right {
        width: 15%;
        text-align: right;
    }
`;
