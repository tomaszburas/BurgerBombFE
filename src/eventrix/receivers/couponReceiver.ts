import { EventsReceiver } from 'eventrix';

const couponsReceiver = new EventsReceiver(
    'coupons',
    (eventName, value, stateManager) => {
        stateManager.setState('coupons', value);
    }
);

export default couponsReceiver;
