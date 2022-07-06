import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../../../../config';
import { toast } from 'react-toastify';
import { NewAdminEntity, Form } from 'types';
import { useEmit } from 'eventrix';
import { AdminsForm } from './AdminsForm';

interface Props {
    id: string;
    email: string;
    role: string;
    state: (element: boolean) => void;
}

export const AdminsEditForm = ({ id, email, role, state }: Props) => {
    const emit = useEmit();
    const [form, setForm] = useState<NewAdminEntity>({
        email: email,
        password: '',
        role: role,
    });

    const handleEditForm = async (e: FormEvent) => {
        e.preventDefault();

        if (
            email === form.email &&
            form.password === '' &&
            role === form.role
        ) {
            toast.warning('Please update data');
            return;
        }

        const res = await fetch(`${HOSTPORT}/admin/${id}`, {
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
            toast.error(data.message);
            return;
        }

        emit('users:update', data.user);
        state(false);
        toast.success(data.message);
    };

    return (
        <>
            <AdminsForm
                handler={handleEditForm}
                form={form}
                setForm={setForm}
                name={Form.EDIT}
            />
        </>
    );
};
