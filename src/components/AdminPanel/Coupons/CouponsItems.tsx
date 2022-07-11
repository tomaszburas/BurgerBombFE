import { useEmit, useEventrixState } from 'eventrix';
import { useEffect } from 'react';
import { CouponEntity } from 'types';
import { HOST } from '../../../config';
import { LoaderData } from '../../LoaderData';
import { NoData } from '../../NoData';
import { CouponsItem } from './CouponsItem';

export const CouponsItems = () => {
    const emit = useEmit();
    const [coupons] = useEventrixState<CouponEntity[]>('coupons');

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOST}/coupon`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();

            emit('coupons:set', data.coupons);
        })();
    }, [emit]);

    if (coupons === null) {
        return (
            <>
                <LoaderData />
            </>
        );
    }

    return (
        <>
            {coupons.length === 0 ? (
                <NoData />
            ) : (
                coupons.map((coupon) => (
                    <CouponsItem key={coupon.id} {...coupon} />
                ))
            )}
        </>
    );
};
