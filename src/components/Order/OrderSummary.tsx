import styled from 'styled-components';
import { useEventrixState } from 'eventrix';
import { BasketEntity, CouponEntityResponse } from 'types';
import { useEffect, useState } from 'react';
import { round } from '../../utils/round';

export const OrderSummary = () => {
    const [basket] = useEventrixState<BasketEntity[]>('basket');
    const [coupons] = useEventrixState<CouponEntityResponse>('coupons');
    const [couponActive, setCouponActive] = useState(false);
    const [value, setValue] = useState(
        basket.reduce((prev, curr) => prev + curr.totalValue, 0)
    );

    useEffect(() => {
        let couponValue = 1;

        if (coupons) {
            couponValue = 1 - coupons.value / 100;
            setCouponActive(true);
        }

        const sum = basket.reduce((prev, curr) => prev + curr.totalValue, 0);

        setValue(round(sum * couponValue));
    }, [basket, coupons]);

    return (
        <Container>
            {couponActive && (
                <div className="summary-row color-eden">
                    <p className="title">Discount:</p>
                    <p className="value">-{coupons.value}%</p>
                </div>
            )}
            <div className="summary-row">
                <p className="title">Total Value:</p>
                <p className="value">$ {value}</p>
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
