import { BurgerForm } from 'types';

export const burgerData = (form: BurgerForm) => {
    const dataReq = new FormData();
    dataReq.append('name', form.name);
    dataReq.append('price', String(form.price));
    dataReq.append('img', form.img);
    dataReq.append('active', JSON.stringify(form.active));
    dataReq.append('ingredients', JSON.stringify(form.ingredients));

    return dataReq;
};
