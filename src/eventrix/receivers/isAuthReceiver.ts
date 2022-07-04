import { EventsReceiver } from 'eventrix';

const isAuthReceiver = new EventsReceiver(
    'isAuth',
    (eventName, value, stateManager) => {
        stateManager.setState('isAuth', value);
    }
);

export default isAuthReceiver;
