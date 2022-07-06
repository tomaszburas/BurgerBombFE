import styled from 'styled-components';
import { AdminHeader } from '../components/Headers/AdminHeader';
import { useEffect, useState } from 'react';
import { BotdContainer } from '../components/AdminPanel/Botd/BotdContainer';
import { AdminsContainer } from '../components/AdminPanel/Admins/AdminsContainer';
import { BurgersContainer } from '../components/AdminPanel/Burgers/BurgersContainer';
import { InfoContainer } from '../components/AdminPanel/Info/InfoContainer';
import { IngredientsContainer } from '../components/AdminPanel/Ingredients/IngredientsContainer';
import { OrdersContainer } from '../components/AdminPanel/Orders/OrdersContainer';
import { CouponsContainer } from '../components/AdminPanel/Coupons/CouponsContainer';
import { AdminPanelItems } from 'types';
import { useEmit } from 'eventrix';
import { HOSTPORT } from '../config';

export const AdminPanel = () => {
    const [menuItem, setMenuItem] = useState(AdminPanelItems.ORDERS);
    const emit = useEmit();

    useEffect(() => {
        (async () => {
            const resBurgers = fetch(`${HOSTPORT}/burger`, {
                credentials: 'include',
                mode: 'cors',
            });
            const resIngredients = fetch(`${HOSTPORT}/ingredient`, {
                credentials: 'include',
                mode: 'cors',
            });

            const res = await Promise.all([resBurgers, resIngredients]);
            const data = await Promise.all(res.map((el) => el.json()));

            emit('burgers:set', data[0].burgers);
            emit('ingredients:set', data[1].ingredients);
        })();
    }, [emit]);

    return (
        <Container>
            <div className="wrapper">
                <AdminHeader />
                <section className="admin-panel">
                    <div className="admin-panel-wrapper">
                        <div className="menu-container">
                            <ul>
                                <li
                                    onClick={() =>
                                        setMenuItem(AdminPanelItems.ADMINS)
                                    }
                                    className={
                                        menuItem === AdminPanelItems.ADMINS
                                            ? 'active'
                                            : ''
                                    }>
                                    Admins
                                </li>
                                <li
                                    onClick={() =>
                                        setMenuItem(AdminPanelItems.BOTD)
                                    }
                                    className={
                                        menuItem === AdminPanelItems.BOTD
                                            ? 'active'
                                            : ''
                                    }>
                                    BOTD
                                </li>
                                <li
                                    onClick={() =>
                                        setMenuItem(AdminPanelItems.BURGERS)
                                    }
                                    className={
                                        menuItem === AdminPanelItems.BURGERS
                                            ? 'active'
                                            : ''
                                    }>
                                    Burgers
                                </li>
                                <li
                                    onClick={() =>
                                        setMenuItem(AdminPanelItems.COUPONS)
                                    }
                                    className={
                                        menuItem === AdminPanelItems.COUPONS
                                            ? 'active'
                                            : ''
                                    }>
                                    Coupons
                                </li>
                                <li
                                    onClick={() =>
                                        setMenuItem(AdminPanelItems.INFO)
                                    }
                                    className={
                                        menuItem === AdminPanelItems.INFO
                                            ? 'active'
                                            : ''
                                    }>
                                    Info
                                </li>
                                <li
                                    onClick={() =>
                                        setMenuItem(AdminPanelItems.INGREDIENTS)
                                    }
                                    className={
                                        menuItem === AdminPanelItems.INGREDIENTS
                                            ? 'active'
                                            : ''
                                    }>
                                    Ingredients
                                </li>
                                <li
                                    onClick={() =>
                                        setMenuItem(AdminPanelItems.ORDERS)
                                    }
                                    className={
                                        menuItem === AdminPanelItems.ORDERS
                                            ? 'active'
                                            : ''
                                    }>
                                    Orders
                                </li>
                            </ul>
                        </div>
                        <div className="actions-container">
                            {menuItem === AdminPanelItems.ADMINS && (
                                <AdminsContainer />
                            )}
                            {menuItem === AdminPanelItems.BOTD && (
                                <BotdContainer />
                            )}
                            {menuItem === AdminPanelItems.BURGERS && (
                                <BurgersContainer />
                            )}
                            {menuItem === AdminPanelItems.INFO && (
                                <InfoContainer />
                            )}
                            {menuItem === AdminPanelItems.INGREDIENTS && (
                                <IngredientsContainer />
                            )}
                            {menuItem === AdminPanelItems.ORDERS && (
                                <OrdersContainer />
                            )}
                            {menuItem === AdminPanelItems.COUPONS && (
                                <CouponsContainer />
                            )}
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
                    width: 15%;

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

        .bxs-edit {
            color: ${(props) => props.theme.colors.eden};
            cursor: pointer;
        }

        .bx-trash {
            color: ${(props) => props.theme.colors.red};
            cursor: pointer;
        }
    }
`;
