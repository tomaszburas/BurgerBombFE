import styled from 'styled-components';

export const Footer = () => {
    return (
        <Container>
            <div className="footer">
                © 2022 Burger Bomb | Created by{' '}
                <a
                    href="https://github.com/tomaszburas"
                    title="GitHub"
                    target="_blank"
                    rel="noreferrer">
                    Tomaszenko
                </a>
            </div>
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

    .footer {
        width: 80%;
        margin: 1rem 0;
        text-align: center;
    }

    @media only screen and (min-width: 2000px) {
        .footer {
            width: 60%;
        }
    }

    @media only screen and (max-width: 1250px) {
        .footer {
            width: 90%;
        }
    }

    @media only screen and (max-width: 450px) {
        .footer {
            font-size: 1rem;
        }
    }
`;
