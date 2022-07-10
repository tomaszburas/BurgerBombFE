import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasketItems } from '../Basket/BasketItems';
import { OrderSummary } from './OrderSummary';
import { BasketEntity, CouponEntity, OrderFormEntity } from 'types';
import { useEventrixState } from 'eventrix';
import { HOSTPORT } from '../../config';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
    form: OrderFormEntity;
}

export const OrderItems = ({ form }: Props) => {
    const [basket] = useEventrixState<BasketEntity[]>('basket');
    const [coupon] = useEventrixState<CouponEntity[]>('coupons');

    const handleOrder = async () => {
        if (basket.length === 0) {
            return;
        }

        const res = await fetch(`${HOSTPORT}/order`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client: form,
                order: basket,
                coupon,
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }
    };

    return (
        <Container>
            <div className="basket-items">
                <BasketItems title="summary" />
            </div>
            <div className="summary">
                <OrderSummary />
                <div className="button-wrapper">
                    {/*<Link to="/summary">*/}
                    <button title="Submit your order" onClick={handleOrder}>
                        Submit your order
                    </button>
                    {/*</Link>*/}
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
