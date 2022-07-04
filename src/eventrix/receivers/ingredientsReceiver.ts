import { EventsReceiver } from 'eventrix';

const ingredientsReceiver = new EventsReceiver(
    'ingredients',
    (eventName, value, stateManager) => {
        stateManager.setState('ingredients', value);
    }
);

export default ingredientsReceiver;
