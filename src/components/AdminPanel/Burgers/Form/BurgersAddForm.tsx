import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { BurgerForm, Form } from 'types';
import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { BurgersForm } from './BurgersForm';
import { burgerData } from '../../../../utils/burger-data';
import { toastOptions } from '../../../../utils/toastOptions';

export const BurgersAddForm = () => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<BurgerForm>({
        name: '',
        price: 0,
        img: null,
        active: false,
        ingredients: [],
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/burger`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            body: burgerData(form),
        });

        const data = await res.json();

        if (!data.success) {
            toast.update(load, {
                ...toastOptions,
                render: data.message,
                type: 'error',
            });
            setLoading(false);
            return;
        }

        toast.update(load, {
            ...toastOptions,
            render: data.message,
            type: 'success',
        });
        emit('burgers:add', data.burger);
        emit(Form.ADD, false);
        setLoading(false);
    };

    return (
        <>
            <BurgersForm
                handler={handleAddForm}
                name={Form.ADD}
                form={form}
                setForm={setForm}
                loading={loading}
            />
        </>
    );
};
