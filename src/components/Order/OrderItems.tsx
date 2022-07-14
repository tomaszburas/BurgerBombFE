import styled from 'styled-components';
import { BasketItems } from '../Basket/BasketItems';
import { OrderSummary } from './OrderSummary';
import { LoaderData } from '../LoaderData';

interface Props {
    loading: boolean;
}

export const OrderItems = ({ loading }: Props) => {
    return (
        <Container>
            <div className="basket-items">
                <BasketItems title="summary" />
            </div>
            <div className="summary">
                <OrderSummary />
                <div className="button-wrapper">
                    {loading ? (
                        <LoaderData width={30} height={30} />
                    ) : (
                        <button title="Submit your order" type="submit">
                            Submit your order
                        </button>
                    )}
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
        font-size: ${(props) => props.theme.fontSize.sm};
    }

    .button-wrapper {
        display: flex;
        justify-content: center;
    }

    button {
        margin-top: 1rem;
    }
`;
