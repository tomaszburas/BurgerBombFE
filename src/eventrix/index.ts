import { Eventrix } from 'eventrix';
import isAuthReceiver from './receivers/isAuthReceiver';
import { usersReceiver } from './receivers/usersReceiver';
import {
    AdminEntityResponse,
    BurgerEntityResponse,
    CouponEntityResponse,
    InfoEntityResponse,
    IngredientEntityResponse,
} from 'types';
import formBgReceiver from './receivers/formBgReceiver';
import ingredientsReceiver from './receivers/ingredientsReceiver';
import infoReceiver from './receivers/infoReceiver';
import couponsReceiver from './receivers/couponReceiver';
import burgersReceiver from './receivers/burgersReceiver';

interface State {
    isAuth: null | boolean;
    users: null | AdminEntityResponse[];
    ingredients: null | IngredientEntityResponse[];
    coupons: null | CouponEntityResponse[];
    burgers: null | BurgerEntityResponse[];
    info: null | InfoEntityResponse;
    addForm: boolean;
}

const initialState: State = {
    isAuth: null,
    users: null,
    ingredients: null,
    coupons: null,
    burgers: null,
    info: null,
    addForm: false,
};

const eventsReceiver = [
    isAuthReceiver,
    usersReceiver,
    ingredientsReceiver,
    couponsReceiver,
    infoReceiver,
    burgersReceiver,
    formBgReceiver,
];

const eventrixStore = new Eventrix(initialState, eventsReceiver);

export default eventrixStore;
