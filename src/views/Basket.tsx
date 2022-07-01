import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OrderHeader } from '../components/Headers/OrderHeader';
import { BasketItems } from '../components/Basket/BasketItems';
import { OrderSummary } from '../components/Order/OrderSummary';

export const Basket = () => {
    return (
        <Container>
            <div className="wrapper">
                <OrderHeader title="basket" />
                <section className="basket">
                    <div className="basket-wrapper">
                        <div className="basket-title">
                            <p>Your Basket</p>
                            <Link to="/order">
                                <button title="Order">Order</button>
                            </Link>
                        </div>
                        <div className="basket-order">
                            <div className="basket-items-wrapper">
                                <BasketItems />
                            </div>
                        </div>
                        <div className="basket-footer">
                            <form>
                                <div className="input-box input-coupon">
                                    <input type="text" id="coupon" />
                                    <label htmlFor="coupon">Coupon Code</label>
                                </div>
                                <button
                                    title="Add coupon"
                                    className="color-brown">
                                    Save
                                </button>
                            </form>
                            <div className="order-summary">
                                <OrderSummary />
                            </div>
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
`;
