import { FormEvent, useState } from 'react';
import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { NewAdminEntity, Role, Form } from 'types';
import { useEmit } from 'eventrix';
import { AdminsForm } from './AdminsForm';
import { toastOptions } from '../../../../utils/toastOptions';

export const AdminsAddForm = () => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<NewAdminEntity>({
        email: '',
        password: '',
        role: Role.ADMIN.toString(),
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/admin`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email.trim(),
                password: form.password.trim(),
                role: form.role,
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
        emit('users:add', data.user);
        emit(Form.ADD, false);
        setLoading(false);
    };

    return (
        <AdminsForm
            handler={handleAddForm}
            form={form}
            setForm={setForm}
            name={Form.ADD}
            loading={loading}
        />
    );
};
