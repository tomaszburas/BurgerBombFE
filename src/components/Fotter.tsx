import styled from 'styled-components';

export const Footer = () => {
    return (
        <Container>
            <p>© 2021 Burger Bomb | Created by Tomaszenko</p>
        </Container>
    );
};

const Container = styled.footer`
    width: 100%;
    background-color: ${(props) => props.theme.colors.brown};
    color: ${(props) => props.theme.colors.cream};
    font-size: ${(props) => props.theme.fontSize.sm};
    display: flex;
    justify-content: center;

    p {
        width: 1200px;
        margin: 1rem 0;
        text-align: center;
    }
`;
