import { Eventrix } from 'eventrix';
import isAuthReceiver from './receivers/isAuthReceiver';
import { usersReceiver } from './receivers/usersReceiver';
import formBgReceiver from './receivers/formReceiver';
import ingredientsReceiver from './receivers/ingredientsReceiver';
import infoReceiver from './receivers/infoReceiver';
import couponsReceiver from './receivers/couponReceiver';
import burgersReceiver from './receivers/burgersReceiver';
import botdReceiver from './receivers/botdReceiver';
import basketReceiver from './receivers/basketReceiver';
import orderReceiver from './receivers/orderReceiver';
import {
    Form,
    AdminEntityResponse,
    BasketEntity,
    OrderEntity,
    IngredientEntity,
    CouponEntity,
    BurgerEntity,
    InfoEntity,
} from 'types';

interface State {
    isAuth: null | boolean;
    users: null | AdminEntityResponse[];
    ingredients: null | IngredientEntity[];
    coupons: null | CouponEntity[];
    burgers: null | BurgerEntity[];
    info: null | InfoEntity;
    [Form.ADD]: boolean;
    [Form.EDIT]: boolean;
    botd: null | BurgerEntity;
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
