import { useEmit } from 'eventrix';
import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { NewIngredientEntity, Form } from 'types';
import { IngredientsForm } from './IngredientsForm';
import { toastOptions } from '../../../../utils/toastOptions';

export const IngredientsAddForm = () => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<NewIngredientEntity>({
        name: '',
        price: 0,
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/ingredient`, {
            method: 'POST',
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
        emit('ingredients:add', data.ingredient);
        emit(Form.ADD, false);
        setLoading(false);
    };

    return (
        <IngredientsForm
            handler={handleAddForm}
            form={form}
            setForm={setForm}
            name={Form.ADD}
            loading={loading}
        />
    );
};
