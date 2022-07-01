import styled from 'styled-components';

export const Footer = () => {
    return (
        <Container>
            <p>
                © 2022 Burger Bomb | Created by{' '}
                <a
                    href="https://github.com/tomaszburas"
                    title="GitHub"
                    target="_blank">
                    Tomaszenko
                </a>
            </p>
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
