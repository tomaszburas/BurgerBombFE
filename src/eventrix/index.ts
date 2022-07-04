import { Eventrix } from 'eventrix';
import isAuthReceiver from './receivers/isAuthReceiver';
import usersReceiver from './receivers/usersReceiver';
import {
    AdminEntityResponse,
    CouponEntityResponse,
    InfoEntityResponse,
    IngredientEntityResponse,
} from 'types';
import formBgReceiver from './receivers/formBgReceiver';
import ingredientsReceiver from './receivers/ingredientsReceiver';
import infoReceiver from './receivers/infoReceiver';
import couponsReceiver from './receivers/couponReceiver';

interface State {
    isAuth: null | boolean;
    users: null | AdminEntityResponse[];
    ingredients: null | IngredientEntityResponse[];
    coupons: null | CouponEntityResponse[];
    info: null | InfoEntityResponse;
    addForm: boolean;
}

const initialState: State = {
    isAuth: null,
    users: null,
    ingredients: null,
    coupons: null,
    info: null,
    addForm: false,
};

const eventsReceiver = [
    isAuthReceiver,
    usersReceiver,
    ingredientsReceiver,
    couponsReceiver,
    infoReceiver,
    ...formBgReceiver,
];

const eventrixStore = new Eventrix(initialState, eventsReceiver);

export default eventrixStore;
