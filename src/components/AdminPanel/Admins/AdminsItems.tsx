import styled from 'styled-components';
import { AdminsItem } from './AdminsItem';
import { useEffect } from 'react';
import { HOSTPORT } from '../../../config';
import { useEmit, useEventrixState } from 'eventrix';
import { AdminEntityResponse } from 'types';
import { NoData } from '../NoData';
import { LoaderData } from '../LoaderData';

export const AdminsItems = () => {
    const [users] = useEventrixState<AdminEntityResponse[]>('users');
    const emit = useEmit();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOSTPORT}/admin`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();

            emit('users', data.users);
        })();
    }, [users]);

    if (users === null) {
        return (
            <Container>
                <LoaderData />
            </Container>
        );
    }

    return (
        <Container>
            {users.length === 0 ? (
                <NoData />
            ) : (
                users.map((user) => (
                    <AdminsItem
                        key={user.id}
                        id={user.id}
                        email={user.email}
                        role={user.role}
                    />
                ))
            )}
        </Container>
    );
};

const Container = styled.div``;
