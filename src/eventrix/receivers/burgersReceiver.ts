import { EventsReceiver } from 'eventrix';
import { BurgerEntity } from 'types';

const burgersReceiver = new EventsReceiver(
    [
        'burgers:set',
        'burgers:add',
        'burgers:remove',
        'burgers:update',
        'burgers:updateActive',
    ],
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
                burgers.filter((burger: BurgerEntity) => burger.id !== value)
            );
        }
        if (eventName === 'burgers:update') {
            stateManager.setState(
                'burgers',
                burgers.map((burger: BurgerEntity) => {
                    if (burger.id === value.id) {
                        return value;
                    } else {
                        return burger;
                    }
                })
            );
        }
        if (eventName === 'burgers:updateActive') {
            stateManager.setState(
                'burgers',
                burgers.map((burger: BurgerEntity) => {
                    if (burger.id === value.id) {
                        return { ...burger, active: value.active };
                    } else {
                        return burger;
                    }
                })
            );
        }
    }
);

export default burgersReceiver;
