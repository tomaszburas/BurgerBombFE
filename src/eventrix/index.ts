import { Eventrix } from 'eventrix';
import isAuthReceiver from './isAuthReceiver';
import usersReceiver from './usersReceiver';
import {
    AdminEntityResponse,
    InfoEntityResponse,
    IngredientEntityResponse,
} from 'types';
import formBgReceiver from './formBgReceiver';
import ingredientsReceiver from './ingredientsReceiver';
import infoReceiver from './infoReceiver';

interface State {
    isAuth: null | boolean;
    users: null | AdminEntityResponse[];
    ingredients: null | IngredientEntityResponse[];
    info: null | InfoEntityResponse;
    addForm: boolean;
}

const initialState: State = {
    isAuth: null,
    users: null,
    ingredients: null,
    info: null,
    addForm: false,
};

const eventsReceiver = [
    isAuthReceiver,
    usersReceiver,
    ingredientsReceiver,
    infoReceiver,
    ...formBgReceiver,
];

const eventrixStore = new Eventrix(initialState, eventsReceiver);

export default eventrixStore;
