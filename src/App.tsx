import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Theme } from './components/Theme';
import { Main } from './views/Main';

export const App = () => {
    return (
        <Theme>
            <Container>
                <Routes>
                    <Route path="/" element={<Main />} />
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
