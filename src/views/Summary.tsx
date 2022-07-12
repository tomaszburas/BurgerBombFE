import styled from 'styled-components';
import { OrderHeader } from '../components/Headers/OrderHeader';
import { Link, Navigate } from 'react-router-dom';
import { OrderSummary } from '../components/Order/OrderSummary';
import { BasketItems } from '../components/Basket/BasketItems';
import { useEmit, useEventrixState } from 'eventrix';
import { BasketEntity, OrderEntity } from 'types';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';

export const Summary = () => {
    const emit = useEmit();
    const [basket] = useEventrixState<BasketEntity[]>('basket');
    const [order] = useEventrixState<OrderEntity>('order');
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            setLoaded(true);
        }
        return () => {
            if (isLoaded) {
                emit('order:set', null);
                emit('basket:reset');
                emit('coupons:set', null);
            }
        };
    }, [isLoaded]);

    if (basket.length === 0) {
        return <Navigate to="/" />;
    }

    if (order === null) {
        return <Loader />;
    }

    return (
        <Container>
            <div className="wrapper">
                <OrderHeader title="summary" />
                <section className="summary">
                    <div className="summary-wrapper">
                        <div className="summary-title">
                            Thank you for your order (#{order.orderNumber}){' '}
                            {order.client.firstName} 🎉
                        </div>
                        <div className="summary-center">
                            <div className="summary-items-wrapper">
                                <BasketItems title="summary" />
                                <div className="total-value-wrapper">
                                    <OrderSummary />
                                </div>
                            </div>
                        </div>
                        <div className="summary-footer">
                            <p className="text">
                                Your order will be delivered as soon as
                                possible. When the supplier arrives have ${' '}
                                {Math.ceil(order.value)} ready if you chose cash
                                as payment method.
                            </p>
                            <Link to="/">
                                <button title="Go home">Home</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    .wrapper {
        width: 80%;
        height: calc(100% - 2rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;

        .summary {
            width: 100%;
            height: calc(100% - 6rem);
            background-color: ${(props) => props.theme.colors.yellow};

            .summary-wrapper {
                margin: 1rem;
                height: calc(100% - 2rem);
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .summary-title {
                    padding: 1rem 1rem;
                    border: 1px solid;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                }

                .summary-center {
                    margin: 1rem 0;
                    height: calc(100% - 5rem);
                    overflow: auto;

                    .summary-items-wrapper {
                        margin: 0 1rem;

                        .total-value-wrapper {
                            display: flex;
                            justify-content: space-between;
                            border-top: 1px solid;
                            padding-top: 1rem;
                        }
                    }
                }

                .summary-footer {
                    padding: 1rem 1rem;
                    border: 1px solid;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    button {
                        height: 2.5rem;
                        background-color: ${(props) => props.theme.colors.eden};
                        border: none;
                        border-radius: 0.5rem;
                        font-size: ${(props) => props.theme.fontSize.base};
                        color: ${(props) => props.theme.colors.cream};
                        padding: 0 1rem;
                        cursor: pointer;
                        margin-left: 1rem;
                    }
                }
            }
        }
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

    @media only screen and (max-width: 700px) {
        .wrapper {
            .summary {
                .summary-wrapper {
                    .summary-center {
                        .summary-items-wrapper {
                            font-size: ${(props) => props.theme.fontSize.sm};

                            .total-value-wrapper {
                                font-size: ${(props) =>
                                    props.theme.fontSize.base};
                            }
                        }
                    }

                    .summary-footer {
                        flex-direction: column;

                        .text {
                            font-size: ${(props) => props.theme.fontSize.sm};
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
    }
`;
