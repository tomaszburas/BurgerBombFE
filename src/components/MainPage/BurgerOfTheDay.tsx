import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { AddBurgerToBasket } from './AddBurgerToBasket';
import { useEmit, useEventrixState } from 'eventrix';
import { LoaderData } from '../LoaderData';
import { HOSTPORT } from '../../config';
import { BurgerEntityResponse } from 'types';
import { ingredientsName } from '../../utils/ingredients-name';

export const BurgerOfTheDay = () => {
    const emit = useEmit();
    const [botd] = useEventrixState<BurgerEntityResponse>('botd');
    const [addBtn, setAddBtn] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOSTPORT}/botd`, {
                credentials: 'include',
                mode: 'cors',
            });

            const data = await res.json();
            emit('botd:set', data.botd?.burger);
        })();
    }, [emit]);

    return (
        <Container>
            <div className="container">
                <h2>Burger of the day</h2>
                {botd === null ? (
                    <LoaderData color="#FF6363" />
                ) : (
                    <div className="wrapper">
                        <div className="left">
                            <img
                                src={`${HOSTPORT}/../images/${botd.img}`}
                                alt={`${botd.name} img`}
                            />
                        </div>
                        <div className="center">
                            <p className="burger-name">
                                {botd.name.toUpperCase()} BURGER
                            </p>
                            <p
                                className="burger-price"
                                title="Add to basket"
                                onClick={() => setAddBtn(true)}>
                                $ {botd.price}
                                <i className="bx bx-plus" id="menu" />
                            </p>
                        </div>
                        <div className="right">
                            {ingredientsName(botd.ingredients)}.
                        </div>
                    </div>
                )}
            </div>
            {addBtn ? (
                <AddBurgerToBasket
                    setAddBtn={setAddBtn}
                    name={botd.name}
                    price={botd.price}
                    image={botd.img}
                    ingredients={ingredientsName(botd.ingredients)}
                />
            ) : null}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colors.brown};
    color: ${(props) => props.theme.colors.cream};
    padding-bottom: 2rem;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: ${(props) => props.theme.fontSize.lg};
            margin: 2rem 0 1rem 0;
            color: ${(props) => props.theme.colors.red};
            border: 2px solid ${(props) => props.theme.colors.red};
            padding: 0.8rem;
        }

        .wrapper {
            display: flex;
            width: 100%;

            .left {
                width: 30%;
                margin-right: 5%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 10rem;
                }
            }

            .center {
                width: 30%;
                margin-right: 5%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .burger-name {
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                .burger-price {
                    padding: 1rem;
                    background-color: ${(props) => props.theme.colors.red};
                    cursor: pointer;
                    display: flex;
                    align-items: center;

                    .bx-plus {
                        margin-left: 1rem;
                        padding: 0.2rem;
                        background-color: ${(props) =>
                            props.theme.colors.cream};
                        color: ${(props) => props.theme.colors.red};
                        border-radius: 0.5rem;
                    }
                }
            }

            .right {
                width: 30%;
                display: flex;
                align-items: center;
            }
        }
    }
`;
