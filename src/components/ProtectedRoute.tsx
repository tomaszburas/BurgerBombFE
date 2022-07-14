import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useEventrixState, useEmit } from 'eventrix';
import { API_URL, PREFIX } from '../config';
import { Loader } from './Loader';

interface Props {
    children: ReactElement;
    checkAuth: boolean;
}

export const ProtectedRoute = ({ checkAuth, children }: Props): any => {
    const [isAuth] = useEventrixState('isAuth');
    const emit = useEmit();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/admin/auth`, {
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

    if (!checkAuth) {
        return !isAuth ? children : <Navigate to={`${PREFIX}/admin`} />;
    }

    if (checkAuth) {
        return isAuth ? children : <Navigate to={`${PREFIX}/login`} />;
    }
};
