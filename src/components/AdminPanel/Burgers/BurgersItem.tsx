import styled from 'styled-components';
import burgerImg from '../../../assets/images/burgers/avobeko.png';
import { NavItems } from '../NavItems';

export const BurgersItem = () => {
    return (
        <Container>
            <div className="img">
                <img src={burgerImg} alt="Avobeko Burger" />
            </div>
            <p className="name">AVOBEKO BURGER</p>
            <p className="ingredients">
                Black Angus beef, avocado, bacon, Cheddar cheese, tomato, red
                onion, pickled cucumber, fresh arugula, and sauce.
            </p>
            <p className="price">$ 9</p>
            <div className="nav">
                <i className="bx bxs-edit" title="Edit" />
                <i className="bx bx-trash" title="Remove" />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.theme.fontSize.sm};

    .img {
        img {
            width: 40%;
        }
    }
    .nav {
        display: flex;
        justify-content: center;
        font-size: ${(props) => props.theme.fontSize.base};
    }
`;
