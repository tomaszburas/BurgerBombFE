import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Theme } from './components/Theme';
import { Main } from './views/Main';
import { Login } from './views/Login';
import { Basket } from './views/Basket';
import { Order } from './views/Order';
import { Summary } from './views/Summary';
import { AdminPanel } from './views/AdminPanel';

export const App = () => {
    return (
        <Theme>
            <Container>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
            </Container>
        </Theme>
    );
};

const Container = styled.section`
    width: 100%;
    height: 100vh;
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
`;
