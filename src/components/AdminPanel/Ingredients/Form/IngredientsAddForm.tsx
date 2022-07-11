import { useEmit } from 'eventrix';
import { HOST } from '../../../../config';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { NewIngredientEntity, Form } from 'types';
import { IngredientsForm } from './IngredientsForm';

export const IngredientsAddForm = () => {
    const emit = useEmit();
    const [form, setForm] = useState<NewIngredientEntity>({
        name: '',
        price: 0,
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOST}/ingredient`, {
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
            toast.error(data.message);
            return;
        }

        emit('ingredients:add', data.ingredient);
        emit(Form.ADD, false);
        toast.success(data.message);
    };

    return (
        <>
            <IngredientsForm
                handler={handleAddForm}
                form={form}
                setForm={setForm}
                name={Form.ADD}
            />
        </>
    );
};
