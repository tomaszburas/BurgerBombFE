import styled from 'styled-components';
import { OrderHeader } from '../components/Headers/OrderHeader';
import { Link, Navigate } from 'react-router-dom';
import { OrderSummary } from '../components/Order/OrderSummary';
import { BasketItems } from '../components/Basket/BasketItems';
import { useEventrixState } from 'eventrix';
import { BasketEntity } from 'types';

export const Summary = () => {
    const [basket] = useEventrixState<BasketEntity[]>('basket');

    if (basket.length === 0) {
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <div className="wrapper">
                <OrderHeader title="summary" />
                <section className="summary">
                    <div className="summary-wrapper">
                        <div className="summary-title">
                            Thank you for your order Tomasz 🎉
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
                                possible. When the supplier arrives have $ 35
                                ready if you chose cash as payment method.
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
        width: 1200px;
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
`;
