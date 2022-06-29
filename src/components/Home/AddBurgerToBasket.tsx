import styled from 'styled-components';

interface Props {
    setAddBtn: (param: boolean) => void;
    name: string;
    price: number;
    image: string;
    ingredients: string;
}

export const AddBurgerToBasket = ({
    setAddBtn,
    name,
    price,
    image,
    ingredients,
}: Props) => {
    return (
        <Container onClick={() => setAddBtn(false)}>
            <div className="wrapper">
                <i
                    className="bx bx-x"
                    title="Close"
                    onClick={() => setAddBtn(false)}
                />
                <img src={image} alt="burger" />
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(18, 91, 80, 0.8);
    backdrop-filter: blur(4px);

    .wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.colors.cream};
        padding: 1rem;

        img {
            width: 20%;
        }

        .bx-x {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            font-size: ${(props) => props.theme.fontSize.lg};
        }
    }
`;
