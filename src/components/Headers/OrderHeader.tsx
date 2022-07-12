import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

interface Props {
    title: string;
}

export const OrderHeader = ({ title }: Props) => {
    return (
        <Container>
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="path">
                <p
                    className={
                        title === 'basket'
                            ? 'title margin-right active'
                            : 'title margin-right'
                    }>
                    BASKET
                </p>
                <i className="bx bx-right-arrow-alt margin-right" />
                <p
                    className={
                        title === 'order'
                            ? 'title margin-right active'
                            : 'title margin-right'
                    }>
                    ORDER
                </p>
                <i className="bx bx-right-arrow-alt margin-right" />
                <p className={title === 'summary' ? 'title active' : 'title'}>
                    SUMMARY
                </p>
            </div>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    .logo {
        height: 4rem;
        cursor: pointer;
    }

    .path {
        display: flex;
        align-items: center;

        .margin-right {
            margin-right: 1rem;
        }

        .title {
            padding: 0.5rem 1rem;
            border: 1px solid;
            opacity: 30%;
        }

        .active {
            color: ${(props) => props.theme.colors.eden};
            padding: 0.5rem 1rem;
            border: 1px solid ${(props) => props.theme.colors.eden};
            opacity: 100%;
        }

        .bx {
            opacity: 30%;
        }
    }

    @media only screen and (max-width: 850px) {
        padding: 0.5rem 0;
        .logo {
            height: 3rem;
        }
    }

    @media only screen and (max-width: 800px) {
        .path {
            font-size: 1rem;

            .margin-right {
                margin-right: 0.5rem;
            }
        }
    }

    @media only screen and (max-width: 550px) {
        .path {
            font-size: 0.8rem;

            .margin-right {
                margin-right: 0.5rem;
            }

            .title {
                padding: 0.5rem 0.5rem;
            }

            .active {
                color: ${(props) => props.theme.colors.eden};
                padding: 0.5rem 0.5rem;
                border: 1px solid ${(props) => props.theme.colors.eden};
                opacity: 100%;
            }
        }
    }
`;
