import styled from 'styled-components';

export const OrdersItem = () => {
    return (
        <Container>
            <p className="lp">#1</p>
            <div className="burger">
                <p className="burger-name">Kozi Burger</p>
                <p className="burger-sauce">sauce: tomato</p>
                <p className="burger-ingredients">ing.: cucumber , jalapeno</p>
            </div>
            <div className="address">
                <p className="full-name">George Flinston</p>
                <p className="street">Bertarsy 24/2</p>
                <p className="city">25-144 Warsaw</p>
                <p className="phone">tel: 665884885</p>
                <p className="mail">tera@gg.pl</p>
            </div>
            <p className="price">
                <p className="price-burger">burger: $ 9</p>
                <p className="price-ingredients">ing.: $ 3</p>
                <p className="price-coupon">coupon: -10%</p>
                <p className="price-sum">sum: 11.8$</p>
            </p>
            <p className="pm">Card</p>
            <p className="status">new order</p>
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
    font-size: ${(props) => props.theme.fontSize.sm};
    align-items: center;

    .bxs-edit {
        color: ${(props) => props.theme.colors.eden};
        cursor: pointer;
    }

    .bx-trash {
        color: ${(props) => props.theme.colors.red};
        cursor: pointer;
    }

    .nav {
        display: flex;
        justify-content: center;
        font-size: ${(props) => props.theme.fontSize.base};
    }
`;
