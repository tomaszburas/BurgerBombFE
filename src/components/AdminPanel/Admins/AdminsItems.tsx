import { AdminsItem } from './AdminsItem';
import { useEffect } from 'react';
import { API_URL } from '../../../config';
import { useEmit, useEventrixState } from 'eventrix';
import { AdminEntityResponse } from 'types';
import { NoData } from '../../NoData';
import { LoaderData } from '../../LoaderData';

export const AdminsItems = () => {
    const emit = useEmit();
    const [users] = useEventrixState<AdminEntityResponse[]>('users');

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/admin`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();
            emit('users:set', data.users);
        })();
    }, [emit]);

    if (users === null) {
        return <LoaderData />;
    }

    return (
        <>
            {users.length === 0 ? (
                <NoData />
            ) : (
                users.map((user: AdminEntityResponse) => (
                    <AdminsItem
                        key={user.id}
                        id={user.id}
                        email={user.email}
                        role={user.role}
                    />
                ))
            )}
        </>
    );
};
