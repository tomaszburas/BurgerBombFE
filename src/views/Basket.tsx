import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OrderHeader } from '../components/Headers/OrderHeader';
import { BasketItems } from '../components/Basket/BasketItems';
import { OrderSummary } from '../components/Order/OrderSummary';
import { useEmit, useEventrixState } from 'eventrix';
import { BasketEntity } from 'types';
import { FormEvent, useState } from 'react';
import { HOST } from '../config';
import { toast } from 'react-toastify';

export const Basket = () => {
    const emit = useEmit();
    const [basket] = useEventrixState<BasketEntity[]>('basket');
    const [coupon, setCoupon] = useState('');

    const handleCoupon = async (e: FormEvent) => {
        e.preventDefault();

        if (coupon === '') {
            return;
        }

        const res = await fetch(`${HOST}/coupon/code/${coupon}`, {
            credentials: 'include',
            mode: 'cors',
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        emit('coupons:set', data.coupon);
        toast.success('Coupon activated 🎉');
    };

    return (
        <Container>
            <div className="wrapper">
                <OrderHeader title="basket" />
                <section className="basket">
                    <div className="basket-wrapper">
                        <div className="basket-title">
                            <p>Your Basket</p>
                            {basket.length !== 0 && (
                                <Link to="/order">
                                    <button title="Order">Order</button>
                                </Link>
                            )}
                        </div>
                        <div className="basket-order">
                            <div className="basket-items-wrapper">
                                <BasketItems />
                            </div>
                        </div>
                        {basket.length !== 0 && (
                            <div className="basket-footer">
                                <form>
                                    <div className="input-box input-coupon">
                                        <input
                                            type="text"
                                            id="coupon"
                                            value={coupon}
                                            onChange={(e) =>
                                                setCoupon(e.target.value)
                                            }
                                        />
                                        <label htmlFor="coupon">
                                            Coupon Code
                                        </label>
                                    </div>
                                    <button
                                        title="Add coupon"
                                        className="color-brown"
                                        onClick={handleCoupon}>
                                        Save
                                    </button>
                                </form>
                                <div className="order-summary">
                                    <OrderSummary />
                                </div>
                            </div>
                        )}
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

        .basket {
            width: 100%;
            height: calc(100% - 6rem);
            background-color: ${(props) => props.theme.colors.yellow};

            .basket-wrapper {
                margin: 1rem;
                height: calc(100% - 2rem);
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .basket-title {
                    padding: 1rem 1rem;
                    border: 1px solid;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .basket-order {
                    margin: 1rem 0;
                    height: calc(100% - 5rem);
                    overflow: auto;

                    .basket-items-wrapper {
                        margin: 0 1rem;
                    }
                }

                .basket-footer {
                    padding: 1rem 1rem;
                    border: 1px solid;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    form {
                        display: flex;
                        align-items: flex-end;

                        .color-brown {
                            background: ${(props) => props.theme.colors.brown};
                        }

                        .input-coupon {
                            margin: 0.5rem 1rem 0 0;

                            label {
                                background: ${(props) =>
                                    props.theme.colors.yellow};
                            }

                            input {
                                background: ${(props) =>
                                    props.theme.colors.yellow};
                            }
                        }
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

    @media only screen and (max-width: 800px) {
        .wrapper {
            .basket {
                .basket-wrapper {
                    .basket-footer {
                        display: flex;
                        flex-direction: column;

                        form {
                            width: 100%;
                            justify-content: space-between;

                            .input-coupon {
                                input {
                                }
                            }
                        }

                        .order-summary {
                            margin-top: 1rem;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 580px) {
        .wrapper {
            .basket {
                .basket-wrapper {
                    .basket-order {
                        .basket-items-wrapper {
                            font-size: 1rem;
                        }
                    }
                    .basket-footer {
                        form {
                            .input-coupon {
                                input {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
