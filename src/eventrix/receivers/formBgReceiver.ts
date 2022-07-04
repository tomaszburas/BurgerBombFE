import { EventsReceiver } from 'eventrix';

const addFormReceiver = new EventsReceiver(
    'addForm',
    (eventName, value, stateManager) => {
        stateManager.setState('addForm', value);
    }
);

export default addFormReceiver;
