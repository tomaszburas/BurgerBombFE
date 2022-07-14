import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { BurgerForm, Form } from 'types';
import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { BurgersForm } from './BurgersForm';
import { burgerData } from '../../../../utils/burger-data';
import { toastOptions } from '../../../../utils/toastOptions';

interface Props {
    id: string;
    name: string;
    price: number;
    active: boolean;
    ingredientsId: string[];
    state: (element: boolean) => void;
}

export const BurgersEditForm = ({
    id,
    name,
    price,
    ingredientsId,
    state,
    active,
}: Props) => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<BurgerForm>({
        name,
        price,
        active,
        img: null,
        ingredients: ingredientsId,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (
            name === form.name &&
            price === form.price &&
            JSON.stringify(ingredientsId) ===
                JSON.stringify(form.ingredients) &&
            form.img === null
        ) {
            toast.warning('Please update data');
            return;
        }

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/burger/${id}`, {
            method: 'PUT',
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
        setLoading(false);
        emit('burgers:update', data.burger);
        state(false);
    };

    return (
        <BurgersForm
            handler={handleEditForm}
            name={Form.EDIT}
            form={form}
            setForm={setForm}
            loading={loading}
        />
    );
};
