import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { BurgerForm, Form } from 'types';
import { HOST } from '../../../../config';
import { toast } from 'react-toastify';
import { BurgersForm } from './BurgersForm';
import { burgerData } from '../../../../utils/burger-data';

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
    const [form, setForm] = useState<BurgerForm>({
        name,
        price,
        active,
        img: null,
        ingredients: ingredientsId,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();

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

        const res = await fetch(`${HOST}/burger/${id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            body: burgerData(form),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        emit('burgers:update', data.burger);
        state(false);
        toast.success(data.message);
    };

    return (
        <>
            <BurgersForm
                handler={handleEditForm}
                name={Form.EDIT}
                form={form}
                setForm={setForm}
            />
        </>
    );
};
