import styled from 'styled-components';
import burgerImg from '../../assets/images/burger-home.png';

export const BurgerOfTheDay = () => {
    return (
        <Container>
            <div className="container">
                <h2>Burger of the day</h2>
                <div className="wrapper">
                    <div className="left">
                        <img src={burgerImg} alt="burger" />
                    </div>
                    <div className="center">
                        <p className="burger-name">KOZI BURGER</p>
                        <p className="burger-price" title="Add to basket">
                            $7.99
                            <i className="bx bx-plus" id="menu" />
                        </p>
                    </div>
                    <div className="right">
                        Black Angus beef, bacon, Chorizo, Cheddar cheese,
                        tomato, pickled cucumber, fresh arugula, roasted onion,
                        and sauce.
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colors.brown};
    color: ${(props) => props.theme.colors.cream};
    padding-bottom: 2rem;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: ${(props) => props.theme.fontSize.lg};
            margin: 2rem 0 1rem 0;
            color: ${(props) => props.theme.colors.red};
            border: 2px solid ${(props) => props.theme.colors.red};
            padding: 0.8rem;
        }

        .wrapper {
            display: flex;

            .left {
                width: 30%;
                margin-right: 5%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 12rem;
                }
            }

            .center {
                width: 30%;
                margin-right: 5%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .burger-name {
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                .burger-price {
                    padding: 1rem;
                    background-color: ${(props) => props.theme.colors.red};
                    cursor: pointer;
                    display: flex;
                    align-items: center;

                    .bx-plus {
                        margin-left: 1rem;
                        padding: 0.2rem;
                        background-color: ${(props) =>
                            props.theme.colors.cream};
                        color: ${(props) => props.theme.colors.red};
                        border-radius: 0.5rem;
                    }
                }
            }

            .right {
                width: 30%;
                display: flex;
                align-items: center;
            }
        }
    }
`;
