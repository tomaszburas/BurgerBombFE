import { EventsReceiver } from 'eventrix';
import { CouponEntity } from 'types';

const couponsReceiver = new EventsReceiver(
    ['coupons:set', 'coupons:add', 'coupons:remove', 'coupons:update'],
    (eventName, value, stateManager) => {
        const coupons = stateManager.getState('coupons');

        if (eventName === 'coupons:set') {
            stateManager.setState('coupons', value);
        }
        if (eventName === 'coupons:add') {
            stateManager.setState('coupons', [...coupons, value]);
        }
        if (eventName === 'coupons:remove') {
            stateManager.setState(
                'coupons',
                coupons.filter((coupon: CouponEntity) => coupon.id !== value)
            );
        }
        if (eventName === 'coupons:update') {
            stateManager.setState(
                'coupons',
                coupons.map((coupon: CouponEntity) => {
                    if (coupon.id === value.id) {
                        return value;
                    } else {
                        return coupon;
                    }
                })
            );
        }
    }
);

export default couponsReceiver;
