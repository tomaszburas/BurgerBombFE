import styled from 'styled-components';
import { Burger } from './Burger';
import { useEmit, useEventrixState } from 'eventrix';
import { LoaderData } from '../LoaderData';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { BurgerEntity } from 'types';

export const Menu = () => {
    const emit = useEmit();
    const [burgers] = useEventrixState('burgers');
    const [activeBurgers, setActiveBurgers] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/burger`, {
                credentials: 'include',
                mode: 'cors',
            });

            const data = await res.json();
            emit('burgers:set', data.burgers);

            setActiveBurgers(
                data.burgers.filter((burger: BurgerEntity) => burger.active)
            );
        })();
    }, [emit]);

    if (burgers === null) {
        return (
            <Container>
                <div className="wrapper">
                    <LoaderData />
                </div>
            </Container>
        );
    }

    if (activeBurgers.length === 0) {
        return null;
    }

    return (
        <Container>
            <div className="wrapper">
                {activeBurgers.map((burger: BurgerEntity) => (
                    <Burger
                        key={burger.id}
                        id={burger.id}
                        name={burger.name}
                        price={burger.price}
                        image={burger.img}
                        ingredients={burger.ingredients}
                    />
                ))}
            </div>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.yellow};
    display: flex;
    justify-content: center;

    .wrapper {
        width: 80%;
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        gap: 5%;
        flex-wrap: wrap;
        height: 100%;
    }

    @media only screen and (min-width: 2000px) {
        .wrapper {
            width: 60%;
        }
    }

    @media only screen and (max-width: 1250px) {
        .wrapper {
            width: 90%;
        }
    }
`;
