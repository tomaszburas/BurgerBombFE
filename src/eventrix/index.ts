import { Eventrix } from 'eventrix';
import isAuthReceiver from './isAuthReceiver';

const initialState = {
    isAuth: null,
};

const eventsReceiver = [isAuthReceiver];

const eventrixStore = new Eventrix(initialState, eventsReceiver);

export default eventrixStore;
