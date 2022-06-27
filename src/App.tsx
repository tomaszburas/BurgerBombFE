import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Theme } from './components/Theme';
import { Main } from './views/Main';
import { Login } from './components/Login';
import { Basket } from './views/Basket';
import { Order } from './views/Order';
import { Summary } from './views/Summary';

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
`;
