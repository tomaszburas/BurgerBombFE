import { Eventrix } from 'eventrix';
import isAuthReceiver from './receivers/isAuthReceiver';
import { usersReceiver } from './receivers/usersReceiver';
import formBgReceiver from './receivers/formReceiver';
import ingredientsReceiver from './receivers/ingredientsReceiver';
import infoReceiver from './receivers/infoReceiver';
import couponsReceiver from './receivers/couponReceiver';
import burgersReceiver from './receivers/burgersReceiver';
import {
    Form,
    AdminEntityResponse,
    BurgerEntityResponse,
    CouponEntityResponse,
    InfoEntityResponse,
    IngredientEntityResponse,
    BasketEntity,
    OrderEntity,
} from 'types';
import botdReceiver from './receivers/botdReceiver';
import basketReceiver from './receivers/basketReceiver';
import orderReceiver from './receivers/orderReceiver';

interface State {
    isAuth: null | boolean;
    users: null | AdminEntityResponse[];
    ingredients: null | IngredientEntityResponse[];
    coupons: null | CouponEntityResponse[];
    burgers: null | BurgerEntityResponse[];
    info: null | InfoEntityResponse;
    [Form.ADD]: boolean;
    [Form.EDIT]: boolean;
    botd: null | BurgerEntityResponse;
    basket: BasketEntity[];
    order: OrderEntity | null;
}

const initialState: State = {
    isAuth: null,
    users: null,
    ingredients: null,
    coupons: null,
    burgers: null,
    info: null,
    [Form.ADD]: false,
    [Form.EDIT]: false,
    botd: null,
    basket: [],
    order: null,
};

const eventsReceiver = [
    isAuthReceiver,
    usersReceiver,
    ingredientsReceiver,
    couponsReceiver,
    infoReceiver,
    burgersReceiver,
    botdReceiver,
    basketReceiver,
    orderReceiver,
    ...formBgReceiver,
];

const eventrixStore = new Eventrix(initialState, eventsReceiver);

export default eventrixStore;
