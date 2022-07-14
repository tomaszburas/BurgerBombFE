import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { CouponsForm } from './CouponsForm';
import { NewCouponEntity } from 'types';
import { Form } from 'types';
import { toastOptions } from '../../../../utils/toastOptions';

export const CouponsAddForm = () => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<NewCouponEntity>({
        name: '',
        value: 0,
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/coupon`, {
            method: 'POST',
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
        emit('coupons:add', data.coupon);
        emit(Form.ADD, false);
        setLoading(false);
    };

    return (
        <CouponsForm
            handler={handleAddForm}
            form={form}
            setForm={setForm}
            name={Form.ADD}
            loading={loading}
        />
    );
};
