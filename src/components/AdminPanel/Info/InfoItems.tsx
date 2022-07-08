import { useEmit, useEventrixState } from 'eventrix';
import { InfoEntityResponse } from 'types';
import { useEffect } from 'react';
import { HOSTPORT } from '../../../config';
import { LoaderData } from '../LoaderData';
import styled from 'styled-components';

export const InfoItems = () => {
    const emit = useEmit();
    const [info] = useEventrixState<InfoEntityResponse>('info');

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOSTPORT}/info`, {
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
