import { HOSTPORT } from '../../../../config';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { useEmit } from 'eventrix';
import { IngredientsForm } from './IngredientsForm';
import { NewIngredientEntity, Form } from 'types';

interface Props {
    id: string;
    name: string;
    price: number;
    state: (element: boolean) => void;
}

export const IngredientsEditForm = ({ id, name, price, state }: Props) => {
    const emit = useEmit();
    const [form, setForm] = useState<NewIngredientEntity>({
        name,
        price,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();

        if (name === form.name && price === form.price) {
            toast.warning('Please update data');
            return;
        }

        const res = await fetch(`${HOSTPORT}/ingredient/${id}`, {
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
            toast.error(data.message);
            return;
        }

        emit('ingredients:update', data.ingredient);
        emit('burgers:set', data.burgers);
        state(false);
        toast.success(data.message);
    };

    return (
        <>
            <IngredientsForm
                handler={handleEditForm}
                form={form}
                setForm={setForm}
                name={Form.EDIT}
            />
        </>
    );
};
