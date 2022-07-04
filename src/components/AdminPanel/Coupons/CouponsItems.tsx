import { useEmit, useEventrixState } from 'eventrix';
import { CouponEntityResponse } from 'types';
import { useEffect } from 'react';
import { HOSTPORT } from '../../../config';
import { LoaderData } from '../LoaderData';
import { NoData } from '../NoData';
import { CouponsItem } from './CouponsItem';

export const CouponsItems = () => {
    const [coupons] = useEventrixState<CouponEntityResponse[]>('coupons');
    const emit = useEmit();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOSTPORT}/coupon`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();

            emit('coupons', data.coupons);
        })();
    }, [coupons]);

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
