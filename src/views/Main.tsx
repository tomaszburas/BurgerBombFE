import styled from 'styled-components';
import { Home } from '../components/MainPage/Home';
import { BurgerOfTheDay } from '../components/MainPage/BurgerOfTheDay';
import { Header } from '../components/Headers/Header';
import { Menu } from '../components/MainPage/Menu';
import { Contact } from '../components/MainPage/Contact';
import { Footer } from '../components/MainPage/Fotter';

export const Main = () => {
    return (
        <Wrapper>
            <Header />
            <Home />
            <BurgerOfTheDay />
            <Menu />
            <Contact />
            <Footer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
