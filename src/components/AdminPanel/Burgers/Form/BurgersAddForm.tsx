import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { BurgerForm, Form } from 'types';
import { HOST } from '../../../../config';
import { toast } from 'react-toastify';
import { BurgersForm } from './BurgersForm';
import { burgerData } from '../../../../utils/burger-data';

export const BurgersAddForm = () => {
    const emit = useEmit();
    const [form, setForm] = useState<BurgerForm>({
        name: '',
        price: 0,
        img: null,
        active: false,
        ingredients: [],
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOST}/burger`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            body: burgerData(form),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        toast.success(data.message);
        emit('burgers:add', data.burger);
        emit(Form.ADD, false);
    };

    return (
        <>
            <BurgersForm
                handler={handleAddForm}
                name={Form.ADD}
                form={form}
                setForm={setForm}
            />
        </>
    );
};
