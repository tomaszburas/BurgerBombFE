import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEventrixState } from 'eventrix';
import { BasketEntity } from 'types';

export const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [basket] = useEventrixState<BasketEntity[]>('basket');

    const changeBackground = () => {
        if (window.scrollY > 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <Container isActive={navbar}>
            <div className="wrapper">
                <NavHashLink smooth to="/#">
                    <img className="logo" src={logo} alt="logo" />
                </NavHashLink>
                <ul>
                    <NavHashLink smooth to="/#" className="li">
                        Home
                    </NavHashLink>
                    <NavHashLink smooth to="#menu" className="li">
                        Menu
                    </NavHashLink>
                    <NavHashLink smooth to="#contact" className="li">
                        Contact
                    </NavHashLink>
                </ul>

                <Link to="/basket">
                    <i className="bx bxs-basket">
                        {basket.length !== 0 && (
                            <div className="pulse-badge-wrapper">
                                <div className="pulse-badge" />
                            </div>
                        )}
                    </i>
                </Link>
            </div>
        </Container>
    );
};

const Container = styled.section<{ isActive: boolean }>`
    position: fixed;
    z-index: 10;
    padding: 1rem 0;
    width: 100%;
    background-color: ${(props) =>
        props.isActive ? props.theme.colors.cream : ''};
    display: flex;
    justify-content: center;
    -webkit-transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -o-transition: background-color 0.5s ease-out;
    transition: background-color 0.5s ease-out;

    .wrapper {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            height: 4rem;
            cursor: pointer;
        }

        ul {
            display: flex;
            z-index: 1;

            .li {
                cursor: pointer;
                font-weight: 500;
                position: relative;
            }

            .li:not(:last-child) {
                margin-right: 1rem;
            }
        }

        .bxs-basket {
            z-index: 1;
            cursor: pointer;
            font-size: ${(props) => props.theme.fontSize.lg};

            .pulse-badge-wrapper {
                position: relative;
            }
            .pulse-badge {
                position: absolute;
                bottom: 1.6rem;
                right: -0.8rem;
                width: 0.8rem;
                height: 0.8rem;
            }

            .pulse-badge::before,
            .pulse-badge::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }

            .pulse-badge::before {
                z-index: 1;
                top: 0;
                left: 0;
                background: ${(props) => props.theme.colors.red};
            }

            @keyframes pulse1 {
                0% {
                    opacity: 0.5;
                    transform: scale(0.5);
                }
                100% {
                    opacity: 0;
                    transform: scale(2.5);
                }
            }

            .pulse-badge::after {
                z-index: 0;
                top: -4px;
                left: -4px;
                border: 4px solid ${(props) => props.theme.colors.red};
                transform: scale(0.5);
                animation: pulse1 2s infinite;
            }
        }
    }

    @media only screen and (min-width: 2000px) {
        .wrapper {
            width: 60%;
        }
    }

    @media only screen and (max-width: 1250px) {
        .wrapper {
            width: 90%;
        }
    }

    @media only screen and (max-width: 850px) {
        padding: 0.5rem 0;

        .wrapper {
            .logo {
                height: 3rem;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        font-size: ${(props) => props.theme.fontSize.sm};

        .wrapper {
            ul {
                display: none;
            }
        }
    }
`;
