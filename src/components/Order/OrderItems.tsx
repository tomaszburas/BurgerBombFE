import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasketItems } from '../Basket/BasketItems';
import { OrderSummary } from './OrderSummary';

export const OrderItems = () => {
    return (
        <Container>
            <div className="basket-items">
                <BasketItems />
            </div>
            <div className="summary">
                <OrderSummary />
                <div className="button-wrapper">
                    <Link to="/summary">
                        <button title="Submit your order">
                            Submit your order
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .basket-items {
        margin-bottom: 1rem;
    }

    .button-wrapper {
        display: flex;
        justify-content: center;
    }

    button {
        margin-top: 1rem;
    }
`;
