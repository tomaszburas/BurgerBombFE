import styled from 'styled-components';
import { useEmit, useEventrixState } from 'eventrix';
import { LoaderData } from '../../LoaderData';
import { NoData } from '../../NoData';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';
import { toast } from 'react-toastify';
import { BurgerEntity } from 'types';
import { toastOptions } from '../../../utils/toastOptions';

export const BotdContainer = () => {
    const emit = useEmit();
    const [burgers] = useEventrixState<BurgerEntity[]>('burgers');
    const [botd] = useEventrixState<BurgerEntity>('botd');
    const [burgerId, setBurgerId] = useState(
        burgers.length === 1 ? burgers[0].id : botd?.id
    );

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/botd`, {
                credentials: 'include',
                mode: 'cors',
            });

            const data = await res.json();

            if (data.botd.burger !== null) {
                setBurgerId(data.botd.burger.id);
                emit('botd:set', data.botd.burger);
            }
        })();
    }, [emit]);

    const handleSaveBotd = async () => {
        const load = toast.loading('Please wait...');
        const res = await fetch(`${API_URL}/botd`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                burgerId,
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.update(load, {
                ...toastOptions,
                render: data.message,
                type: 'error',
            });
            return;
        }

        toast.update(load, {
            ...toastOptions,
            render: data.message,
            type: 'success',
        });
        emit('botd:set', data.botd.burger);
    };

    return (
        <Container>
            <div className="header">Burger of the day</div>
            <div className="data-wrapper">
                {!burgers ? (
                    <LoaderData />
                ) : burgers.length > 0 ? (
                    <>
                        <label htmlFor="burgers">Choose a burger:</label>
                        <select
                            name="burgers"
                            id="burgers"
                            value={burgerId}
                            onChange={(e) => setBurgerId(e.target.value)}>
                            {burgers.map((burger) => (
                                <option key={burger.id} value={burger.id}>
                                    {burger.name}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleSaveBotd}>Save</button>
                    </>
                ) : (
                    <NoData />
                )}
            </div>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0.5rem 1rem;
        background-color: ${(props) => props.theme.colors.red};
        font-weight: 500;
    }

    .data-wrapper {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;

        label {
            margin-right: 1rem;
        }

        select {
            margin-right: 1rem;
            padding: 0.5rem;
            font-size: ${(props) => props.theme.fontSize.sm};
            background: ${(props) => props.theme.colors.cream};
        }
    }
`;
