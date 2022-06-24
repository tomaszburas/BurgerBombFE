import styled from 'styled-components';
import AVOBEKO from '../assets/images/burgers/avobeko.png';
import CRISBY from '../assets/images/burgers/crisby.png';
import NEWYORK from '../assets/images/burgers/newyork.png';
import { Burger } from './Burger';

export const Menu = () => {
    return (
        <Container>
            <div className="wrapper">
                <Burger
                    name="AVOBEKO"
                    price={9}
                    image={AVOBEKO}
                    ingredients="Black Angus beef, avocado, bacon, Cheddar cheese, tomato, red onion, pickled cucumber, fresh arugula, and sauce."
                />
                <Burger
                    name="CRISBY"
                    price={9}
                    image={CRISBY}
                    ingredients="Black Angus beef, bacon, Chorizo, Cheddar cheese, tomato, pickled cucumber, fresh arugula, roasted onion, and sauce"
                />
                <Burger
                    name="NEWYORK"
                    price={9}
                    image={NEWYORK}
                    ingredients="Black Angus beef, Cheddar cheese, bacon, fried eggs, tomato, fresh arugula, and sauce."
                />
            </div>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.yellow};
    display: flex;
    justify-content: center;

    .wrapper {
        width: 1200px;
        margin: 2rem 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
