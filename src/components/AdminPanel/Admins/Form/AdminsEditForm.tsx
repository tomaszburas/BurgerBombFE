import { FormEvent, useState } from 'react';
import { API_URL } from '../../../../config';
import { toast } from 'react-toastify';
import { NewAdminEntity, Form } from 'types';
import { useEmit } from 'eventrix';
import { AdminsForm } from './AdminsForm';
import { toastOptions } from '../../../../utils/toastOptions';

interface Props {
    id: string;
    email: string;
    role: string;
    state: (element: boolean) => void;
}

export const AdminsEditForm = ({ id, email, role, state }: Props) => {
    const emit = useEmit();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<NewAdminEntity>({
        email: email,
        password: '',
        role: role,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (
            email === form.email &&
            form.password === '' &&
            role === form.role
        ) {
            toast.warning('Please update data');
            return;
        }

        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/admin/${id}`, {
            method: 'PUT',
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
        setLoading(false);
        emit('users:update', data.user);
        state(false);
    };

    return (
        <AdminsForm
            handler={handleEditForm}
            form={form}
            setForm={setForm}
            name={Form.EDIT}
            loading={loading}
        />
    );
};
