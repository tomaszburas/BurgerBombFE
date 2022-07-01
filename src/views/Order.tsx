import styled from 'styled-components';
import { OrderItems } from '../components/Order/OrderItems';
import { OrderHeader } from '../components/Headers/OrderHeader';

export const Order = () => {
    return (
        <Container>
            <div className="wrapper">
                <OrderHeader title="order" />
                <section className="order">
                    <div className="order-wrapper">
                        <div className="left-wrapper">
                            <form>
                                <div className="order-title">
                                    <p>Your Data</p>
                                </div>
                                <div className="row">
                                    <div className="input-order">
                                        <input
                                            type="text"
                                            id="firstName"
                                            required
                                        />
                                        <label htmlFor="firstName">
                                            First Name
                                        </label>
                                    </div>
                                    <div className="input-order">
                                        <input
                                            type="text"
                                            id="lastName"
                                            required
                                        />
                                        <label htmlFor="lastName">
                                            Last Name
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-order">
                                        <input
                                            type="text"
                                            id="street"
                                            required
                                        />
                                        <label htmlFor="street">Street</label>
                                    </div>
                                    <div className="input-order">
                                        <input
                                            type="text"
                                            id="number"
                                            required
                                        />
                                        <label htmlFor="number">Number</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-order">
                                        <input
                                            type="text"
                                            id="zipCode"
                                            required
                                        />
                                        <label htmlFor="zipCode">
                                            Zip Code
                                        </label>
                                    </div>
                                    <div className="input-order">
                                        <input type="text" id="city" required />
                                        <label htmlFor="city">City</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-order">
                                        <input
                                            type="phone"
                                            id="phone"
                                            required
                                        />
                                        <label htmlFor="phone">Phone</label>
                                    </div>
                                    <div className="input-order">
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="order-title margin-top">
                                    <p>Payment method</p>
                                </div>
                                <div className="payment-row">
                                    <div className="payment-wrapper">
                                        <input
                                            type="radio"
                                            id="cash"
                                            name="paymentMethod"
                                            value="cash"
                                            required
                                        />
                                        <label htmlFor="cash">Cash</label>
                                    </div>
                                    <i className="bx bx-money" />
                                </div>
                                <div className="payment-row">
                                    <div className="payment-wrapper">
                                        <input
                                            type="radio"
                                            id="card"
                                            name="paymentMethod"
                                            value="card"
                                        />
                                        <label htmlFor="card">
                                            Card (on delivery)
                                        </label>
                                    </div>
                                    <i className="bx bxs-credit-card" />
                                </div>
                                <div className="checkbox">
                                    <div className="checkbox-left">
                                        <input
                                            type="checkbox"
                                            id="conditions"
                                            required
                                        />
                                        <label htmlFor="conditions">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div className="checkbox-right">
                                        I accept the provisions of the
                                        Regulations and the Privacy Policy
                                        (required)
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="right-wrapper">
                            <OrderItems />
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.cream};

    .wrapper {
        width: 1200px;
        height: calc(100% - 2rem);
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

                    form {
                        display: flex;
                        flex-direction: column;

                        .order-title {
                            padding: 1rem;
                            border: 1px solid;
                        }

                        .margin-top {
                            margin-top: 1rem;
                        }

                        .row {
                            display: flex;
                            justify-content: space-between;
                            width: 100%;

                            .input-order {
                                position: relative;
                                height: fit-content;
                                width: 48%;
                                margin-top: 0.5rem;

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
                                    width: 100%;
                                    height: 2.5rem;
                                    border-radius: 6px;
                                    background: ${(props) =>
                                        props.theme.colors.yellow};
                                    border: 1px solid
                                        ${(props) => props.theme.colors.brown};
                                    padding: 0 10px;

                                    &:focus {
                                        border: 1px solid
                                            ${(props) =>
                                                props.theme.colors.brown};
                                        outline: 1px solid
                                            ${(props) =>
                                                props.theme.colors.brown};
                                        -webkit-transition: border 0.2s
                                            ease-in-out;
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

                        .row:not(:first-child) {
                            margin-top: 1rem;
                        }

                        .payment-row {
                            margin-top: 1rem;
                            padding: 1rem;
                            border-radius: 6px;
                            border: 1px solid
                                ${(props) => props.theme.colors.brown};
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .payment-wrapper {
                                display: flex;
                                align-items: center;
                            }

                            label {
                                cursor: pointer;
                            }

                            input {
                                cursor: pointer;
                                position: absolute;
                                opacity: 0;
                                + label {
                                    &:before {
                                        content: '';
                                        background: ${(props) =>
                                            props.theme.colors.cream};
                                        border-radius: 100%;
                                        border: 2px solid
                                            ${(props) =>
                                                props.theme.colors.brown};
                                        display: inline-block;
                                        width: 1.4rem;
                                        height: 1.4rem;
                                        position: relative;
                                        top: 0.2rem;
                                        margin-right: 1rem;
                                        vertical-align: center;
                                        cursor: pointer;
                                        transition: all 250ms ease;
                                    }
                                }
                                &:checked {
                                    + label {
                                        &:before {
                                            background-color: ${(props) =>
                                                props.theme.colors.brown};
                                            box-shadow: inset 0 0 0 4px
                                                ${(props) =>
                                                    props.theme.colors.cream};
                                        }
                                    }
                                }
                            }
                        }

                        .checkbox {
                            margin-top: 2rem;
                            display: flex;
                            align-items: center;

                            input {
                                display: none;
                            }

                            @keyframes pull {
                                0% {
                                    height: 0;
                                }
                                100% {
                                    height: 1.4rem;
                                }
                            }

                            input + label span {
                                display: inline-block;
                                width: 1.4rem;
                                height: 1.4rem;
                                margin-right: 1rem;
                                &:before,
                                &:after {
                                    @include transition(all 0.3s ease-in-out);
                                    content: '';
                                    position: absolute;
                                    z-index: 1;
                                    box-sizing: border-box;
                                    width: 1.4rem;
                                    height: 1.4rem;
                                    background: ${(props) =>
                                        props.theme.colors.cream};
                                    border: 2px solid
                                        ${(props) => props.theme.colors.brown};
                                }
                                &:after {
                                    z-index: 0;
                                    border: none;
                                }
                            }

                            input:checked + label span {
                                &:after {
                                    width: 1.4rem;
                                    height: 1.4rem;
                                    background: ${(props) =>
                                        props.theme.colors.brown};
                                    animation: pull 0.4s linear;
                                    z-index: 1;
                                }
                            }
                        }
                    }
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
`;
