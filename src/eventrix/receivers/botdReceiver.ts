import { EventsReceiver } from 'eventrix';

const botdReceiver = new EventsReceiver(
    'botd:set',
    (eventName, value, stateManager) => {
        stateManager.setState('botd', value);
    }
);

export default botdReceiver;
