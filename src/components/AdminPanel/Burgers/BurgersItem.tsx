import styled from 'styled-components';
import burgerImg from '../../../assets/images/burgers/avobeko.png';

interface Props {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
    img: string;
}

export const BurgersItem = ({ id, name, price, ingredients, img }: Props) => {
    return (
        <Container>
            <div className="img">
                <img src={burgerImg} alt="Avobeko Burger" />
            </div>
            <p className="name">{name} burger</p>
            <p className="ingredients">{ingredients}</p>
            <p className="price">$ {price}</p>
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
