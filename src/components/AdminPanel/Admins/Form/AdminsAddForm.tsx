import { FormEvent, useState } from 'react';
import { HOST } from '../../../../config';
import { toast } from 'react-toastify';
import { NewAdminEntity, Role, Form } from 'types';
import { useEmit } from 'eventrix';
import { AdminsForm } from './AdminsForm';

export const AdminsAddForm = () => {
    const emit = useEmit();
    const [form, setForm] = useState<NewAdminEntity>({
        email: '',
        password: '',
        role: Role.ADMIN.toString(),
    });

    const handleAddForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOST}/admin`, {
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
            toast.error(data.message);
            return;
        }

        toast.success(data.message);
        emit(Form.ADD, false);
        emit('users:add', data.user);
    };

    return (
        <>
            <AdminsForm
                handler={handleAddForm}
                form={form}
                setForm={setForm}
                name={Form.ADD}
            />
        </>
    );
};
