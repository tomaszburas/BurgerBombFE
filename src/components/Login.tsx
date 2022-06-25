import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Login = () => {
    return (
        <Container>
            <div className="wrapper">
                <h1>Sign In</h1>
                <form>
                    <div className="google-input">
                        <input type="mail" id="mail" />
                        <label htmlFor="mail">Email</label>
                    </div>
                    <div className="google-input">
                        <input type="password" id="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button title="Sign In">Sign In</button>
                </form>
            </div>
            <NavLink to="/">
                <i className="bx bx-x" />
            </NavLink>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.yellow};

    .bx-x {
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: ${(props) => props.theme.colors.cream};
        font-size: ${(props) => props.theme.fontSize.xl2};
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${(props) => props.theme.colors.cream};
        padding: 2rem 3rem;

        h1 {
            font-size: ${(props) => props.theme.fontSize.lg};
            margin-bottom: 2rem;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        button {
            background-color: ${(props) => props.theme.colors.yellow};
            border: none;
            border-radius: 0.5rem;
            font-size: ${(props) => props.theme.fontSize.base};
            color: ${(props) => props.theme.colors.cream};
            padding: 0.5rem 1rem;
            cursor: pointer;
        }

        .google-input {
            position: relative;
            height: fit-content;
            width: fit-content;
            margin-bottom: 1.5rem;

            label {
                position: absolute;
                left: 10px;
                top: 12px;
                width: max-content;
                transition: all 0.2s ease-in-out;
                background: ${(props) => props.theme.colors.cream};
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
                background: ${(props) => props.theme.colors.cream};
                border: 1px solid ${(props) => props.theme.colors.brown};
                font-size: 16px;
                padding: 0 10px;

                &:focus {
                    border: 1px solid ${(props) => props.theme.colors.eden};
                    outline: 1px solid ${(props) => props.theme.colors.eden};
                    -webkit-transition: border 0.2s ease-in-out;
                    transition: border 0.2s ease-in-out;
                }

                &:focus ~ label,
                &:not(:placeholder-shown) ~ label {
                    top: -14px;
                    font-size: 13px;
                }

                &:focus ~ label {
                    color: ${(props) => props.theme.colors.eden};
                    font-weight: bolder;
                }
            }
        }
    }
`;
