import { useEmit } from 'eventrix';
import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../../../../config';
import { toast } from 'react-toastify';
import { CouponsForm } from './CouponsForm';
import { NewCouponEntity } from 'types';
import { Form } from 'types';

export const CouponsAddForm = () => {
    const emit = useEmit();
    const [form, setForm] = useState<NewCouponEntity>({
        name: '',
        value: 0,
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOSTPORT}/coupon`, {
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
            toast.error(data.message);
            return;
        }

        toast.success(data.message);
        emit('coupons:add', data.coupon);
        emit(Form.ADD, false);
    };

    return (
        <>
            <>
                <CouponsForm
                    handler={handleAddForm}
                    form={form}
                    setForm={setForm}
                    name={Form.ADD}
                />
            </>
        </>
    );
};
