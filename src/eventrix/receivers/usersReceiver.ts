import { EventsReceiver } from 'eventrix';

const usersReceiver = new EventsReceiver(
    'users',
    (eventName, value, stateManager) => {
        stateManager.setState('users', value);
    }
);

export default usersReceiver;
