import styled from 'styled-components';
import { BasketItems } from '../Basket/BasketItems';
import { OrderSummary } from './OrderSummary';
import { BasketEntity, CouponEntity, OrderFormEntity } from 'types';
import { useEmit, useEventrixState } from 'eventrix';
import { API_URL, PREFIX } from '../../config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toastOptions } from '../../utils/toastOptions';
import { LoaderData } from '../LoaderData';

interface Props {
    form: OrderFormEntity;
}

export const OrderItems = ({ form }: Props) => {
    const emit = useEmit();
    const [basket] = useEventrixState<BasketEntity[]>('basket');
    const [coupon] = useEventrixState<CouponEntity[]>('coupons');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleOrder = async () => {
        setLoading(true);

        if (basket.length === 0) {
            return;
        }

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/order`, {
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
            toast.update(load, {
                ...toastOptions,
                render: data.message,
                type: 'error',
            });
            setLoading(false);
            return;
        }

        toast.update(load, {
            ...toastOptions,
            render: 'Thank you for your order ❤️',
            type: 'success',
        });
        setLoading(false);
        emit('order:set', data.order);
        navigate(`${PREFIX}/summary`);
    };

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
                        <button title="Submit your order" onClick={handleOrder}>
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
