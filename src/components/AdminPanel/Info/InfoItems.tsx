import { useEmit, useEventrixState } from 'eventrix';
import { useEffect } from 'react';
import { API_URL } from '../../../config';
import { LoaderData } from '../../LoaderData';
import styled from 'styled-components';
import { InfoEntity } from 'types';

export const InfoItems = () => {
    const emit = useEmit();
    const [info] = useEventrixState<InfoEntity>('info');

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/info`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();
            emit('info:set', data.info);
        })();
    }, [emit]);

    if (!info) {
        return (
            <Container>
                <LoaderData />
            </Container>
        );
    }

    return (
        <>
            <p className="title">{info.street}</p>
            <p className="title">{info.number}</p>
            <p className="title">{info.zipCode}</p>
            <p className="title">{info.city}</p>
            <p className="title">{info.phone}</p>
            <p className="title">{info.email}</p>
            <p className="title">
                {info.monThu.from} - {info.monThu.to}
            </p>
            <p className="title">
                {info.friSat.from} - {info.friSat.to}
            </p>
            <p className="title">
                {info.sun.from} - {info.sun.to}
            </p>
        </>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
