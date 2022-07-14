import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { CouponsForm } from './CouponsForm';
import { NewCouponEntity, Form } from 'types';
import { toastOptions } from '../../../../utils/toastOptions';

interface Props {
    id: string;
    name: string;
    value: number;
    state: (element: boolean) => void;
}

export const CouponsEditForm = ({ id, name, value, state }: Props) => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<NewCouponEntity>({
        name,
        value,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (name === form.name && value === form.value) {
            toast.warning('Please update data');
            return;
        }

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/coupon/${id}`, {
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
        emit('coupons:update', data.coupon);
        state(false);
    };

    return (
        <CouponsForm
            handler={handleEditForm}
            form={form}
            setForm={setForm}
            name={Form.EDIT}
            loading={loading}
        />
    );
};
