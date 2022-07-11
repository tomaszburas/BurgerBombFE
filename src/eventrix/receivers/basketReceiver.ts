import { EventsReceiver } from 'eventrix';
import { BasketEntity } from 'types';

const basketReceiver = new EventsReceiver(
    [
        'basket:set',
        'basket:add',
        'basket:update',
        'basket:remove',
        'basket:reset',
    ],
    (eventName, value, stateManager) => {
        const basket = stateManager.getState('basket');

        if (eventName === 'basket:set') {
            stateManager.setState('basket', [value]);
        }

        if (eventName === 'basket:reset') {
            stateManager.setState('basket', []);
        }

        if (eventName === 'basket:add') {
            stateManager.setState('basket', [...basket, value]);
        }

        if (eventName === 'basket:remove') {
            stateManager.setState(
                'basket',
                basket.filter((basket: BasketEntity) => basket.id !== value)
            );
        }

        if (eventName === 'basket:update') {
            stateManager.setState(
                'basket',
                basket.map((el: BasketEntity) => {
                    if (el.id === value.id) {
                        return value;
                    } else {
                        return el;
                    }
                })
            );
        }
    }
);

export default basketReceiver;
