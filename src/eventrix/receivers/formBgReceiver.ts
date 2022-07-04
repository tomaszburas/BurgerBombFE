import { EventsReceiver } from 'eventrix';
import { Form } from '../../types/formEnum';

const addFormReceiver = new EventsReceiver(
    Form.ADD,
    (eventName, value, stateManager) => {
        stateManager.setState(Form.ADD, value);
    }
);

export default [addFormReceiver];
