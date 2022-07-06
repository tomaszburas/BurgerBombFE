import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../../../../config';
import { toast } from 'react-toastify';
import { CouponsForm } from './CouponsForm';
import { NewCouponEntity, Form } from 'types';

interface Props {
    id: string;
    name: string;
    value: number;
    state: (element: boolean) => void;
}

export const CouponsEditForm = ({ id, name, value, state }: Props) => {
    const emit = useEmit();
    const [form, setForm] = useState<NewCouponEntity>({
        name,
        value,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();

        if (name === form.name && value === form.value) {
            toast.warning('Please update data');
            return;
        }

        const res = await fetch(`${HOSTPORT}/coupon/${id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name.trim(),
                value: Number(form.value),
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        emit('coupons:update', data.coupon);
        state(false);
        toast.success(data.message);
    };

    return (
        <>
            <CouponsForm
                handler={handleEditForm}
                form={form}
                setForm={setForm}
                name={Form.EDIT}
            />
        </>
    );
};
