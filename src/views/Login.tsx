import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../config';
import { toast } from 'react-toastify';
import { useEmit } from 'eventrix';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const emit = useEmit();

    const submitForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${HOSTPORT}/admin/login`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.trim(),
                password: password.trim(),
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        await emit('isAuth', true);
        navigate('/admin');
        toast.success(data.message);
    };

    return (
        <Container>
            <div className="wrapper">
                <h1>Sign In</h1>
                <form onSubmit={submitForm}>
                    <div className="input-box">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
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
