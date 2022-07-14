import React from 'react';
import styled from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Theme } from './components/Theme';
import { Main } from './views/Main';
import { Login } from './views/Login';
import { Basket } from './views/Basket';
import { Order } from './views/Order';
import { Summary } from './views/Summary';
import { AdminPanel } from './views/AdminPanel';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PREFIX } from './config';

export const App = () => {
    return (
        <Theme>
            <Container>
                <Routes>
                    <Route path={`${PREFIX}/`} element={<Main />} />
                    <Route path={`${PREFIX}/basket`} element={<Basket />} />
                    <Route path={`${PREFIX}/order`} element={<Order />} />
                    <Route path={`${PREFIX}/summary`} element={<Summary />} />
                    <Route
                        path={`${PREFIX}/admin`}
                        element={
                            <ProtectedRoute checkAuth={true}>
                                <AdminPanel />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={`${PREFIX}/login`}
                        element={
                            <ProtectedRoute checkAuth={false}>
                                <Login />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to={`${PREFIX}`} />} />
                </Routes>
            </Container>
        </Theme>
    );
};

const Container = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.cream};
    color: ${(props) => props.theme.colors.brown};
    font-size: ${(props) => props.theme.fontSize.base};

    .input-box {
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
            border-radius: 6px;
            background: ${(props) => props.theme.colors.cream};
            border: 1px solid ${(props) => props.theme.colors.brown};
            font-size: 16px;
            padding: 0.7rem;

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
                color: ${(props) => props.theme.colors.brown};
                font-weight: bolder;
            }
        }
    }

    button {
        background-color: ${(props) => props.theme.colors.eden};
        border: none;
        border-radius: 0.5rem;
        font-size: ${(props) => props.theme.fontSize.base};
        color: ${(props) => props.theme.colors.cream};
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    @media only screen and (max-width: 500px) {
        font-size: ${(props) => props.theme.fontSize.sm};

        .input-box {
            input {
                padding: 0.5rem;
            }
        }

        button {
            font-size: ${(props) => props.theme.fontSize.sm};
            padding: 0.4rem 0.7rem;
        }
    }
`;
