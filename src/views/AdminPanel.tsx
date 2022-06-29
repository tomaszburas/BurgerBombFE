import styled from 'styled-components';
import { AdminHeader } from '../components/Headers/AdminHeader';
import { useState } from 'react';
import { BotdContainer } from '../components/AdminPanel/Botd/BotdContainer';
import { AdminsContainer } from '../components/AdminPanel/Admins/AdminsContainer';
import { BurgersContainer } from '../components/AdminPanel/Burgers/BurgersContainer';

export const AdminPanel = () => {
    const [menuItem, setMenuItem] = useState('admins');

    return (
        <Container>
            <div className="wrapper">
                <AdminHeader />
                <section className="admin-panel">
                    <div className="admin-panel-wrapper">
                        <div className="menu-container">
                            <ul>
                                <li
                                    onClick={() => setMenuItem('admins')}
                                    className={
                                        menuItem === 'admins' ? 'active' : ''
                                    }>
                                    Admins
                                </li>
                                <li
                                    onClick={() => setMenuItem('botd')}
                                    className={
                                        menuItem === 'botd' ? 'active' : ''
                                    }>
                                    BOTD
                                </li>
                                <li
                                    onClick={() => setMenuItem('burgers')}
                                    className={
                                        menuItem === 'burgers' ? 'active' : ''
                                    }>
                                    Burgers
                                </li>
                                <li
                                    onClick={() => setMenuItem('info')}
                                    className={
                                        menuItem === 'info' ? 'active' : ''
                                    }>
                                    Info
                                </li>
                                <li
                                    onClick={() => setMenuItem('ingredients')}
                                    className={
                                        menuItem === 'ingredients'
                                            ? 'active'
                                            : ''
                                    }>
                                    Ingredients
                                </li>
                                <li
                                    onClick={() => setMenuItem('orders')}
                                    className={
                                        menuItem === 'orders' ? 'active' : ''
                                    }>
                                    Orders
                                </li>
                            </ul>
                        </div>
                        <div className="actions-container">
                            {menuItem === 'admins' ? <AdminsContainer /> : null}
                            {menuItem === 'botd' ? <BotdContainer /> : null}
                            {menuItem === 'burgers' ? (
                                <BurgersContainer />
                            ) : null}
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    .wrapper {
        width: 1200px;
        height: calc(100% - 2rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;

        .admin-panel {
            width: 100%;
            height: calc(100% - 6rem);
            background-color: ${(props) => props.theme.colors.yellow};

            .admin-panel-wrapper {
                margin: 1rem;
                height: calc(100% - 2rem);
                display: flex;

                .menu-container {
                    margin-right: 1rem;
                    border: 1px solid;
                    padding: 1rem;

                    .active {
                        font-weight: 600;
                    }

                    li {
                        cursor: pointer;
                    }

                    li:not(:last-child) {
                        margin-bottom: 0.5rem;
                    }
                }

                .actions-container {
                    width: 100%;
                }
            }
        }
    }
`;
