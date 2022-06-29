import styled from 'styled-components';
import { OrdersItem } from './OrdersItem';

export const OrdersContainer = () => {
    return (
        <Container>
            <div className="header">
                <p className="lp">Lp</p>
                <p className="burger">Burger</p>
                <p className="address">Address</p>
                <p className="price">Price</p>
                <p className="pm">Pay. Method</p>
                <p className="status">Status</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <OrdersItem />
                <OrdersItem />
                <OrdersItem />
                <OrdersItem />
            </div>
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

    .lp {
        width: 5%;
        margin-right: 1rem;
    }

    .burger {
        width: 20%;
        margin-right: 1rem;
    }

    .address {
        width: 20%;
        margin-right: 1rem;
    }

    .price {
        width: 15%;
        margin-right: 1rem;
    }

    .pm {
        width: 20%;
        margin-right: 1rem;
    }

    .status {
        width: 10%;
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
`;
