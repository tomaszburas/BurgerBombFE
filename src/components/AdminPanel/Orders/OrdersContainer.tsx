import styled from 'styled-components';
import { OrdersItems } from './OrdersItems';

export const OrdersContainer = () => {
    return (
        <Container>
            <div className="header">
                <p className="lp">Lp</p>
                <p className="order">Order</p>
                <p className="client">Client</p>
                <p className="value">Value</p>
                <p className="pm">Pay.</p>
                <p className="status">Status</p>
                <p className="nav">Actions</p>
            </div>
            <div className="data-wrapper">
                <OrdersItems />
            </div>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    font-size: ${(props) => props.theme.fontSize.sm};

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

    .order {
        width: 25%;
        margin-right: 1rem;
    }

    .client {
        width: 25%;
        margin-right: 1rem;
    }

    .value {
        width: 15%;
        margin-right: 1rem;
    }

    .pm {
        width: 5%;
        margin-right: 1rem;
    }

    .status {
        width: 18%;
        margin-right: 1rem;
    }

    .nav {
        width: 7%;
    }

    .data-wrapper {
        margin-top: 0;
        height: calc(100% - ${(props) => props.theme.fontSize.sm} - 4.5rem);
        overflow: auto;
    }
`;
