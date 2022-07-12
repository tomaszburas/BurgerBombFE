import styled from 'styled-components';
import { OrderItems } from '../components/Order/OrderItems';
import { OrderHeader } from '../components/Headers/OrderHeader';
import { useEventrixState } from 'eventrix';
import { Navigate } from 'react-router-dom';
import { BasketEntity } from 'types';
import { OrderForm } from '../components/Order/OrderForm';
import { useState } from 'react';

export const Order = () => {
    const [basket] = useEventrixState<BasketEntity[]>('basket');
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        street: '',
        number: '',
        zipCode: '',
        city: '',
        phone: '',
        email: '',
        paymentMethod: '',
        accRules: false,
    });

    if (basket.length === 0) {
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <div className="wrapper">
                <OrderHeader title="order" />
                <section className="order">
                    <div className="order-wrapper">
                        <div className="left-wrapper">
                            <OrderForm form={form} setForm={setForm} />
                        </div>
                        <div className="right-wrapper">
                            <OrderItems form={form} />
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
    background-color: ${(props) => props.theme.colors.cream};

    .wrapper {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;

        .header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;

            .logo {
                height: 4rem;
                cursor: pointer;
            }

            .title {
                color: ${(props) => props.theme.colors.eden};
                padding: 0.5rem 1rem;
                border: 1px solid ${(props) => props.theme.colors.eden};
            }
        }

        .order {
            width: 100%;
            height: calc(100% - 6rem);
            background-color: ${(props) => props.theme.colors.yellow};

            .order-wrapper {
                margin: 1rem;
                height: calc(100% - 2rem);
                display: flex;

                .left-wrapper {
                    width: 60%;
                }

                .right-wrapper {
                    width: 40%;
                    padding: 1rem;
                    border: 1px solid;
                    margin-left: 1rem;
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

    @media only screen and (max-width: 1000px) {
        height: 100%;
        .wrapper {
            .order {
                .order-wrapper {
                    flex-direction: column;

                    .left-wrapper {
                        width: 100%;
                        margin-bottom: 1rem;
                    }

                    .right-wrapper {
                        width: 100%;
                        padding: 1rem;
                        margin-left: 0;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }
`;
