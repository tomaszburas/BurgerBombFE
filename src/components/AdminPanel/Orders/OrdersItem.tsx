import styled from 'styled-components';
import { OrderEntity, OrderStatus } from 'types';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { API_URL } from '../../../config';
import { toast } from 'react-toastify';
import { useEmit } from 'eventrix';
import { ConfirmationPopUp } from '../../ConfirmationPopUp';
import { useState } from 'react';
import { toastOptions } from '../../../utils/toastOptions';

interface Props {
    order: OrderEntity;
}

const itemColor = (status: OrderStatus): string => {
    if (status === OrderStatus.NEW) {
        return '#CCF6C8';
    }

    if (status === OrderStatus.COMPLETED) {
        return '#F6D6AD';
    }

    if (status === OrderStatus.IN_PROGRESS) {
        return '#FAFCC2';
    }

    return '';
};

export const OrdersItem = ({ order }: Props) => {
    const emit = useEmit();
    const [removePopUp, setRemovePopUp] = useState(false);
    const [status, setStatus] = useState(String(order.status));
    const [color, setColor] = useState(itemColor(order.status));

    const changeStatus = async (e: any) => {
        setStatus(e.target.value);

        if (e.target.value === OrderStatus.NEW) {
            setColor('#CCF6C8');
        }

        if (e.target.value === OrderStatus.COMPLETED) {
            setColor('#F6D6AD');
        }

        if (e.target.value === OrderStatus.IN_PROGRESS) {
            setColor('#FAFCC2');
        }

        const res = await fetch(`${API_URL}/order/${order.id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: e.target.value,
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        emit('order:statusUpdate', {
            id: order.id,
            status: e.target.value,
        });
    };

    const handleRemove = async () => {
        setRemovePopUp(false);
        const load = toast.loading('Please wait...');

        const res = await fetch(`${API_URL}/order/${order.id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        if (data.success) {
            emit('order:remove', order.id);
            toast.update(load, {
                ...toastOptions,
                render: data.message,
                type: 'success',
            });
        } else {
            toast.update(load, {
                ...toastOptions,
                render: data.message,
                type: 'error',
            });
        }
    };

    return (
        <Container color={color}>
            <p className="lp">#{order.orderNumber}</p>
            <div className="order">
                {order.order.map((element) => (
                    <div key={uuid()}>
                        <p className="burger-name">
                            <span className="bold">
                                {element.burgerQuantity} x {element.name} burger
                            </span>
                        </p>
                        <p className="burger-frying">
                            <span className="bold">meat:</span>{' '}
                            {element.meatPreparation}
                        </p>
                        {element.extraIngredients.length > 0 && (
                            <p className="burger-ingredients">
                                <span className="bold">extra:</span>{' '}
                                {element.extraIngredients
                                    .map((ingredient) => ingredient.name)
                                    .join(', ')}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className="client">
                <p className="full-name">
                    {order.client.firstName} {order.client.lastName}
                </p>
                <p className="street">
                    {order.client.street} {order.client.number}
                </p>
                <p className="city">
                    {order.client.zipCode} {order.client.city}
                </p>
                <p className="phone">tel: {order.client.phone}</p>
                <p className="email">{order.client.email}</p>
            </div>
            <div className="value">
                <p className="price-sum">
                    <span className="bold">$ {order.value}</span>
                </p>
            </div>
            <p className="pm">{order.paymentMethod}</p>
            <div className="status">
                <p className="date">
                    {format(new Date(order.date), 'dd.MM.yyyy - HH:mm')}
                </p>
                <select
                    name="burgers"
                    id="burgers"
                    value={status}
                    onChange={changeStatus}>
                    {Object.values(OrderStatus).map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>
            <div className="nav">
                <i
                    className="bx bx-trash"
                    title="Remove"
                    onClick={() => setRemovePopUp(true)}
                />
            </div>
            {removePopUp && (
                <ConfirmationPopUp
                    title={`Are you sure you want to remove this order?`}
                    setPopUp={setRemovePopUp}
                    handler={handleRemove}
                />
            )}
        </Container>
    );
};

const Container = styled.div<{ color: string }>`
    display: flex;
    padding: 0.5rem 1rem 0 1rem;
    background-color: ${(props) => props.color};
    border-bottom: 1px solid;

    .date {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }

    .email {
        margin-bottom: 0.5rem;
    }

    .nav {
        display: flex;
        justify-content: center;
        font-size: ${(props) => props.theme.fontSize.base};
    }

    .burger-ingredients {
        margin-bottom: 0.5rem;
    }

    .bold {
        font-weight: 600;
    }
`;
