import styled from 'styled-components';

interface Props {
    setAddBtn: (param: boolean) => void;
    name: string;
    price: number;
    image: string;
    ingredients: string;
}

export const AddBurgerToBasket = ({
    setAddBtn,
    name,
    price,
    image,
    ingredients,
}: Props) => {
    return (
        <Container>
            <div className="bg" onClick={() => setAddBtn(false)} />
            <div className="wrapper-add-burger">
                <i
                    className="bx bx-x"
                    title="Close"
                    onClick={() => setAddBtn(false)}
                />
                <div className="burger-top">
                    <img src={image} alt="burger" />
                </div>
                <div className="burger-center">
                    <p className="name">{name} BURGER</p>
                    <p className="ingredients">{ingredients}</p>
                </div>
                <div className="burger-bottom">
                    <p className="title">Frying</p>
                    <div className="frying-container">
                        <div className="frying-wrapper">
                            <input
                                type="radio"
                                id="rare"
                                name="frying"
                                value="rare"
                                required
                            />
                            <label htmlFor="rare">Rare</label>
                        </div>
                        <div className="frying-wrapper">
                            <input
                                type="radio"
                                id="medium"
                                name="frying"
                                value="medium"
                                required
                            />
                            <label htmlFor="medium">Medium</label>
                        </div>
                        <div className="frying-wrapper">
                            <input
                                type="radio"
                                id="wellDone"
                                name="frying"
                                value="wellDone"
                                required
                            />
                            <label htmlFor="wellDone">Well Done</label>
                        </div>
                    </div>

                    <p className="title">Extra Ingredients</p>
                    <div className="checkbox">
                        <div className="checkbox-left">
                            <input type="checkbox" id="conditions" required />
                            <label htmlFor="conditions">
                                <span></span>
                                Tomato
                            </label>
                        </div>
                        <div className="checkbox-right">+$2</div>
                    </div>
                    <div className="checkbox">
                        <div className="checkbox-left">
                            <input type="checkbox" id="conditions" required />
                            <label htmlFor="conditions">
                                <span></span>
                                Tomato
                            </label>
                        </div>
                        <div className="checkbox-right">+$2</div>
                    </div>
                    <div className="checkbox">
                        <div className="checkbox-left">
                            <input type="checkbox" id="conditions" required />
                            <label htmlFor="conditions">
                                <span></span>
                                Tomato
                            </label>
                        </div>
                        <div className="checkbox-right">+$2</div>
                    </div>
                </div>
                <div className="summary-container">
                    <div className="quantity">
                        <button className="plus" title="Add">
                            +
                        </button>
                        <button className="minus" title="Remove">
                            -
                        </button>
                    </div>
                    <p className="total-value">$35</p>
                    <button
                        title="Add to basket"
                        onClick={() => setAddBtn(false)}>
                        Add
                    </button>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100vw;
        height: 100vh;
        background-color: rgba(18, 91, 80, 0.8);
        backdrop-filter: blur(4px);
    }

    .wrapper-add-burger {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.colors.cream};
        padding: 1rem;
        z-index: 10;
        width: 35%;
        height: 80vh;
        overflow: auto;

        .bx-x {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            font-size: ${(props) => props.theme.fontSize.lg};
        }

        .burger-top {
            display: flex;
            justify-content: center;

            img {
                width: 50%;
            }
        }

        .burger-center {
            .name {
                text-align: center;
                padding: 0.7rem;
                background-color: ${(props) => props.theme.colors.eden};
                color: ${(props) => props.theme.colors.cream};
            }

            .ingredients {
                padding: 0.5rem;
                font-size: ${(props) => props.theme.fontSize.sm};
                background-color: ${(props) => props.theme.colors.yellow};
            }
        }

        .burger-bottom {
            margin-top: 1rem;
            width: 100%;

            .title {
                text-align: center;
                padding: 0.5rem;
                border: 1px solid;
            }

            .frying-container {
                display: flex;
                justify-content: space-between;

                .frying-wrapper {
                    margin: 1rem 0;
                    display: flex;

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
                                    ${(props) => props.theme.colors.brown};
                                display: inline-block;
                                width: 1.2rem;
                                height: 1.2rem;
                                position: relative;
                                top: 0.2rem;
                                margin-right: 0.5rem;
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
            }

            .checkbox {
                margin-top: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                input {
                    display: none;
                }

                @keyframes pull {
                    0% {
                        height: 0;
                    }
                    100% {
                        height: 1.2rem;
                    }
                }

                input + label span {
                    display: inline-block;
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-right: 0.5rem;
                    &:before,
                    &:after {
                        @include transition(all 0.3s ease-in-out);
                        content: '';
                        position: absolute;
                        z-index: 1;
                        box-sizing: border-box;
                        width: 1.2rem;
                        height: 1.2rem;
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
                        width: 1.2rem;
                        height: 1.2rem;
                        background: ${(props) => props.theme.colors.brown};
                        animation: pull 0.4s linear;
                        z-index: 1;
                    }
                }
            }
        }

        .summary-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 1rem;

            .quantity {
                text-align: center;

                .plus {
                    padding: 0.3rem 0.6rem;
                    background-color: ${(props) => props.theme.colors.eden};
                    color: ${(props) => props.theme.colors.cream};
                    font-size: ${(props) => props.theme.fontSize.base};
                    font-weight: bold;
                    border: none;
                    cursor: pointer;
                    border-radius: 0;
                }

                .minus {
                    padding: 0.3rem 0.8rem;
                    background-color: ${(props) => props.theme.colors.red};
                    color: ${(props) => props.theme.colors.cream};
                    font-size: ${(props) => props.theme.fontSize.base};
                    font-weight: bold;
                    border: none;
                    cursor: pointer;
                    border-radius: 0;
                }
            }

            .total-value {
                font-weight: 500;
            }

            button {
                height: 2.5rem;
                background-color: ${(props) => props.theme.colors.eden};
                border: none;
                border-radius: 0.5rem;
                font-size: ${(props) => props.theme.fontSize.base};
                color: ${(props) => props.theme.colors.cream};
                padding: 0 1rem;
                cursor: pointer;
            }
        }
    }
`;
