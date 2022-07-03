import { Eventrix } from 'eventrix';
import isAuthReceiver from './isAuthReceiver';
import usersReceiver from './usersReceiver';
import { AdminEntityResponse, IngredientEntityResponse } from 'types';
import formBgReceiver from './formBgReceiver';
import ingredientsReceiver from './ingredientsReceiver';

interface State {
    isAuth: null | boolean;
    users: null | AdminEntityResponse[];
    ingredients: null | IngredientEntityResponse[];
    addForm: boolean;
}

const initialState: State = {
    isAuth: null,
    users: null,
    ingredients: null,
    addForm: false,
};

const eventsReceiver = [
    isAuthReceiver,
    usersReceiver,
    ingredientsReceiver,
    ...formBgReceiver,
];

const eventrixStore = new Eventrix(initialState, eventsReceiver);

export default eventrixStore;
