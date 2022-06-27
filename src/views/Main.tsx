import styled from 'styled-components';
import { Home } from '../components/Home/Home';
import { BurgerOfTheDay } from '../components/Home/BurgerOfTheDay';
import { Header } from '../components/Headers/Header';
import { Menu } from '../components/Home/Menu';
import { Contact } from '../components/Home/Contact';
import { Footer } from '../components/Home/Fotter';

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
