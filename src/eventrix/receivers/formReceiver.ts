import { EventsReceiver } from 'eventrix';
import { Form } from 'types';

const addFormReceiver = new EventsReceiver(
    Form.ADD,
    (eventName, value, stateManager) => {
        stateManager.setState(Form.ADD, value);
    }
);

const editFormReceiver = new EventsReceiver(
    Form.EDIT,
    (eventName, value, stateManager) => {
        stateManager.setState(Form.EDIT, value);
    }
);

export default [addFormReceiver, editFormReceiver];
