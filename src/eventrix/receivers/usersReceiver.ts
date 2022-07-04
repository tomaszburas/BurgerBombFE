import { EventsReceiver } from 'eventrix';
import { AdminEntityResponse } from 'types';

export const usersReceiver = new EventsReceiver(
    ['users:set', 'users:add', 'users:remove', 'users:update'],
    (eventName, value, stateManager) => {
        const users = stateManager.getState('users');

        if (eventName === 'users:set') {
            stateManager.setState('users', value);
        }
        if (eventName === 'users:add') {
            stateManager.setState('users', [...users, value]);
        }
        if (eventName === 'users:remove') {
            stateManager.setState(
                'users',
                users.filter((user: AdminEntityResponse) => user.id !== value)
            );
        }
        if (eventName === 'users:update') {
            stateManager.setState(
                'users',
                users.map((user: AdminEntityResponse) => {
                    if (user.id === value.id) {
                        return value;
                    } else {
                        return user;
                    }
                })
            );
        }
    }
);
