import { EventsReceiver } from 'eventrix';

const infoReceiver = new EventsReceiver(
    ['info:set', 'info:update'],
    (eventName, value, stateManager) => {
        const info = stateManager.getState('info');

        if (eventName === 'info:set') {
            stateManager.setState('info', value);
        }
        if (eventName === 'info:update') {
            stateManager.setState('info', value);
        }
    }
);

export default infoReceiver;
