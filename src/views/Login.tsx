import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Login = () => {
    return (
        <Container>
            <div className="wrapper">
                <h1>Sign In</h1>
                <form>
                    <div className="input-box">
                        <input type="email" id="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-box">
                        <input type="password" id="password" required />
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
    }
`;
