import styled from 'styled-components';
import { ContactUs } from './ContactUs';
import { OpeningHours } from './OpeningHours';
import { VisitUs } from './VisitUs';
import { useEmit, useEventrixState } from 'eventrix';
import { LoaderData } from '../LoaderData';
import { useEffect } from 'react';
import { HOST } from '../../config';
import { InfoEntity } from 'types';

interface Props {
    icon: string;
    name: string;
}

export const ContactItem = ({ icon, name }: Props) => {
    const emit = useEmit();
    const [info] = useEventrixState<InfoEntity>('info');

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOST}/info`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();
            emit('info:set', data.info);
        })();
    }, [emit]);

    return (
        <Container>
            <div className="top">
                <i className={icon} />
            </div>
            <div className="center">{name}</div>
            <div className="bottom">
                {name === 'VISIT US' &&
                    (info === null ? (
                        <LoaderData color="#F8B400" />
                    ) : (
                        <VisitUs
                            city={info.city}
                            number={info.number}
                            zipCode={info.zipCode}
                            street={info.street}
                        />
                    ))}
                {name === 'CONTACT US' &&
                    (info === null ? (
                        <LoaderData color="#F8B400" />
                    ) : (
                        <ContactUs phone={info.phone} email={info.email} />
                    ))}
                {name === 'OPENING HOURS' &&
                    (info === null ? (
                        <LoaderData color="#F8B400" />
                    ) : (
                        <OpeningHours
                            monThu={`${info.monThu.from} - ${info.monThu.to}`}
                            friSat={`${info.friSat.from} - ${info.friSat.to}`}
                            sun={`${info.sun.from} - ${info.sun.to}`}
                        />
                    ))}
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        color: ${(props) => props.theme.colors.yellow};
        font-size: ${(props) => props.theme.fontSize.xl};
        margin-bottom: 0.8rem;
    }
    .center {
        color: ${(props) => props.theme.colors.cream};
        font-weight: bold;
        margin-bottom: 0.8rem;
    }
    .bottom {
        color: ${(props) => props.theme.colors.cream};
        display: flex;
        flex-direction: column;
    }
`;
