import { EventsReceiver } from 'eventrix';

const infoReceiver = new EventsReceiver(
    ['info:set', 'info:update'],
    (eventName, value, stateManager) => {
        if (eventName === 'info:set') {
            stateManager.setState('info', value);
        }
        if (eventName === 'info:update') {
            stateManager.setState('info', value);
        }
    }
);

export default infoReceiver;
