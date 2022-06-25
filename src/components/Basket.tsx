import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { BasketItem } from './BasketItem';

export const Basket = () => {
    return (
        <Container>
            <div className="wrapper">
                <section className="header">
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                    <p className="title">BASKET</p>
                </section>
                <section className="basket">
                    <div className="basket-wrapper">
                        <div className="basket-title">
                            <p>Your Order</p>
                            <Link to="/order">
                                <button title="Order" className="button">
                                    Order
                                </button>
                            </Link>
                        </div>
                        <div className="basket-order">
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
                            <BasketItem />
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
                            <p className="value">Value: 35$</p>
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
        margin: 1rem 0;

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
                    height: 50px;
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
                                height: 50px;
                                border-radius: 6px;
                                background: ${(props) =>
                                    props.theme.colors.yellow};
                                border: 1px solid
                                    ${(props) => props.theme.colors.brown};
                                font-size: 16px;
                                padding: 0 10px;

                                &:focus {
                                    border: 1px solid
                                        ${(props) => props.theme.colors.eden};
                                    outline: 1px solid
                                        ${(props) => props.theme.colors.eden};
                                    -webkit-transition: border 0.2s ease-in-out;
                                    transition: border 0.2s ease-in-out;
                                }

                                &:focus ~ label,
                                &:not(:placeholder-shown) ~ label {
                                    top: -14px;
                                    font-size: 13px;
                                }

                                &:focus ~ label {
                                    color: ${(props) =>
                                        props.theme.colors.eden};
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
