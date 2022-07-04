import { EventsReceiver } from 'eventrix';
import { BurgerEntityResponse } from 'types';

const burgersReceiver = new EventsReceiver(
    ['burgers:set', 'burgers:add', 'burgers:remove', 'burgers:update'],
    (eventName, value, stateManager) => {
        const burgers = stateManager.getState('burgers');

        if (eventName === 'burgers:set') {
            stateManager.setState('burgers', value);
        }
        if (eventName === 'burgers:add') {
            stateManager.setState('burgers', [...burgers, value]);
        }
        if (eventName === 'burgers:remove') {
            stateManager.setState(
                'burgers',
                burgers.filter(
                    (burger: BurgerEntityResponse) => burger.id !== value
                )
            );
        }
        if (eventName === 'burgers:update') {
            stateManager.setState(
                'burgers',
                burgers.map((burger: BurgerEntityResponse) => {
                    if (burger.id === value.id) {
                        return value;
                    } else {
                        return burger;
                    }
                })
            );
        }
    }
);

export default burgersReceiver;
