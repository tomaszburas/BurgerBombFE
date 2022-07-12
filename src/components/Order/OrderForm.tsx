import styled from 'styled-components';
import { OrderFormEntity, PaymentMethod } from 'types';

interface Props {
    form: OrderFormEntity;
    setForm: (element: OrderFormEntity) => void;
}

export const OrderForm = ({ form, setForm }: Props) => {
    return (
        <Form>
            <div className="order-title">
                <p>Your Data</p>
            </div>
            <div className="row">
                <div className="input-order">
                    <input
                        type="text"
                        id="firstName"
                        value={form.firstName}
                        onChange={(e) =>
                            setForm({ ...form, firstName: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-order">
                    <input
                        type="text"
                        id="lastName"
                        value={form.lastName}
                        onChange={(e) =>
                            setForm({ ...form, lastName: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="lastName">Last Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-order">
                    <input
                        type="text"
                        id="street"
                        value={form.street}
                        onChange={(e) =>
                            setForm({ ...form, street: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="street">Street</label>
                </div>
                <div className="input-order">
                    <input
                        type="text"
                        id="number"
                        value={form.number}
                        onChange={(e) =>
                            setForm({ ...form, number: e.target.value })
                        }
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
                        value={form.zipCode}
                        onChange={(e) =>
                            setForm({ ...form, zipCode: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="zipCode">Zip Code</label>
                </div>
                <div className="input-order">
                    <input
                        type="text"
                        id="city"
                        value={form.city}
                        onChange={(e) =>
                            setForm({ ...form, city: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="city">City</label>
                </div>
            </div>
            <div className="row">
                <div className="input-order">
                    <input
                        type="phone"
                        id="phone"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="input-order">
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
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
                        value={PaymentMethod.CASH}
                        onChange={(e) =>
                            setForm({ ...form, paymentMethod: e.target.value })
                        }
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
                        value={PaymentMethod.CARD}
                        onChange={(e) =>
                            setForm({ ...form, paymentMethod: e.target.value })
                        }
                    />
                    <label htmlFor="card">Card (on delivery)</label>
                </div>
                <i className="bx bxs-credit-card" />
            </div>
            <div className="checkbox">
                <div className="checkbox-left">
                    <input
                        type="checkbox"
                        id="conditions"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                accRules: e.target.checked,
                            })
                        }
                        required
                    />
                    <label htmlFor="conditions">
                        <span />
                    </label>
                </div>
                <div className="checkbox-right">
                    I accept the provisions of the Regulations and the Privacy
                    Policy (required)
                </div>
            </div>
        </Form>
    );
};

const Form = styled.form`
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
                background: ${(props) => props.theme.colors.yellow};
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
                background: ${(props) => props.theme.colors.yellow};
                border: 1px solid ${(props) => props.theme.colors.brown};
                padding: 0 10px;

                &:focus {
                    border: 1px solid ${(props) => props.theme.colors.brown};
                    outline: 1px solid ${(props) => props.theme.colors.brown};
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

    .row:not(:first-child) {
        margin-top: 1rem;
    }

    .payment-row {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 6px;
        border: 1px solid ${(props) => props.theme.colors.brown};
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
                    background: ${(props) => props.theme.colors.cream};
                    border-radius: 100%;
                    border: 2px solid ${(props) => props.theme.colors.brown};
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
                            ${(props) => props.theme.colors.cream};
                    }
                }
            }
        }
    }

    .checkbox {
        margin-top: 1rem;
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
                background: ${(props) => props.theme.colors.cream};
                border: 2px solid ${(props) => props.theme.colors.brown};
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
                background: ${(props) => props.theme.colors.brown};
                animation: pull 0.4s linear;
                z-index: 1;
            }
        }
    }

    @media only screen and (max-width: 700px) {
        .checkbox {
            font-size: ${(props) => props.theme.fontSize.sm};
        }
    }
`;
