import styled from 'styled-components';

interface Props {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export const IngredientsItem = ({ id, name, price, quantity }: Props) => {
    return (
        <Container>
            <p className="name">{name}</p>
            <p className="price">$ {price}</p>
            <p className="quantity">{quantity}</p>
            <div className="nav">
                <i className="bx bxs-edit" title="Edit" />
                <i className="bx bx-trash" title="Remove" />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 0 1rem;
    margin-bottom: 0.5rem;

    .nav {
        display: flex;
        justify-content: center;
    }
`;
