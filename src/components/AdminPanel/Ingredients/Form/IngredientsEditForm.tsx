import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { useEmit } from 'eventrix';
import { IngredientsForm } from './IngredientsForm';
import { NewIngredientEntity, Form } from 'types';
import { toastOptions } from '../../../../utils/toastOptions';

interface Props {
    id: string;
    name: string;
    price: number;
    state: (element: boolean) => void;
}

export const IngredientsEditForm = ({ id, name, price, state }: Props) => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<NewIngredientEntity>({
        name,
        price,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (name === form.name && price === form.price) {
            toast.warning('Please update data');
            return;
        }

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/ingredient/${id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name.trim(),
                price: Number(form.price),
            }),
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
        emit('ingredients:update', data.ingredient);
        emit('burgers:set', data.burgers);
        state(false);
    };

    return (
        <IngredientsForm
            handler={handleEditForm}
            form={form}
            setForm={setForm}
            name={Form.EDIT}
            loading={loading}
        />
    );
};
