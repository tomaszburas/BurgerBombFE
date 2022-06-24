import styled from 'styled-components';
import { Home } from '../components/Home';
import { BurgerOfTheDay } from '../components/BurgerOfTheDay';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Fotter';

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
