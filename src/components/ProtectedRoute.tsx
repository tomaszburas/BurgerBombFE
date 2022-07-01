import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useEventrixState, useEmit } from 'eventrix';
import { HOSTPORT } from '../config';
import { Loader } from './Loader';

interface Props {
    children: ReactElement;
    auth: boolean;
}

export const ProtectedRoute = ({ auth, children }: Props): any => {
    const [isAuth] = useEventrixState('isAuth');
    const emit = useEmit();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOSTPORT}/admin/auth`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();

            if (data.success) {
                emit('isAuth', true);
            } else {
                emit('isAuth', false);
            }
        })();
    }, []);

    if (isAuth === null) return <Loader />;

    if (!auth) {
        return !isAuth ? children : <Navigate to="/admin" />;
    }

    if (auth) {
        return isAuth ? children : <Navigate to="/login" />;
    }
};
