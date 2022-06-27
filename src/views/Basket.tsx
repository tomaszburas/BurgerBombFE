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
                                <button title="Order" className="button">
                                    Order
                                </button>
                            </Link>
                        </div>
                        <div className="basket-order">
                            <div className="basket-items-wrapper">
                                <BasketItems />
                            </div>
                        </div>
                        <div className="basket-footer">
                            <form>
                                <div className="google-input">
                                    <input type="text" id="coupon" />
                                    <label htmlFor="coupon">Coupon Code</label>
                                </div>
                                <button
                                    title="Add coupon"
                                    className="button color-brown">
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

                .button {
                    height: 2.5rem;
                    background-color: ${(props) => props.theme.colors.eden};
                    border: none;
                    border-radius: 0.5rem;
                    font-size: ${(props) => props.theme.fontSize.base};
                    color: ${(props) => props.theme.colors.cream};
                    padding: 0 1rem;
                    cursor: pointer;
                }

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

                        .google-input {
                            position: relative;
                            height: fit-content;
                            width: fit-content;
                            margin: 0.5rem 1rem 0 0;

                            label {
                                position: absolute;
                                left: 10px;
                                top: 12px;
                                width: max-content;
                                transition: all 0.2s ease-in-out;
                                background: ${(props) =>
                                    props.theme.colors.yellow};
                                padding: 5px 7px;
                                border-radius: 10px;
                                pointer-events: none;
                            }

                            input {
                                position: relative;
                                top: 0;
                                left: 0;
                                width: 300px;
                                height: 2.5rem;
                                border-radius: 6px;
                                background: ${(props) =>
                                    props.theme.colors.yellow};
                                border: 1px solid
                                    ${(props) => props.theme.colors.brown};
                                font-size: 16px;
                                padding: 0 10px;

                                &:focus {
                                    border: 1px solid
                                        ${(props) => props.theme.colors.brown};
                                    outline: 1px solid
                                        ${(props) => props.theme.colors.brown};
                                    -webkit-transition: border 0.2s ease-in-out;
                                    transition: border 0.2s ease-in-out;
                                }

                                &:focus ~ label,
                                &:not(:placeholder-shown) ~ label {
                                    top: -14px;
                                    font-size: 13px;
                                }

                                &:focus ~ label {
                                    font-weight: bolder;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
