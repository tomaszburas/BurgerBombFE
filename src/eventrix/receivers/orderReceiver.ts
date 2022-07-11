import { EventsReceiver } from 'eventrix';
import { OrderEntity } from 'types';

const orderReceiver = new EventsReceiver(
    ['order:set', 'order:statusUpdate', 'order:remove'],
    (eventName, value, stateManager) => {
        const orders = stateManager.getState('order');

        if (eventName === 'order:set') {
            stateManager.setState('order', value);
        }

        if (eventName === 'order:statusUpdate') {
            stateManager.setState(
                'order',
                orders.map((order: OrderEntity) => {
                    if (order.id === value.id) {
                        return {
                            ...order,
                            status: value.status,
                        };
                    } else {
                        return order;
                    }
                })
            );
        }

        if (eventName === 'order:remove') {
            stateManager.setState(
                'order',
                orders.filter((order: OrderEntity) => order.id !== value)
            );
        }
    }
);

export default orderReceiver;
