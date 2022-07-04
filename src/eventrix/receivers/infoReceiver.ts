import { EventsReceiver } from 'eventrix';

const infoReceiver = new EventsReceiver(
    'info',
    (eventName, value, stateManager) => {
        stateManager.setState('info', value);
    }
);

export default infoReceiver;
