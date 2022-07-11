import styled from 'styled-components';
import { OrderEntity, OrderStatus } from 'types';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { HOST } from '../../../config';
import { toast } from 'react-toastify';
import { useEmit } from 'eventrix';
import { ConfirmationPopUp } from '../../ConfirmationPopUp';
import { useState } from 'react';

interface Props {
    order: OrderEntity;
}

export const OrdersItem = ({ order }: Props) => {
    const emit = useEmit();
    const [removePopUp, setRemovePopUp] = useState(false);
    const [status, setStatus] = useState(String(order.status));

    const changeStatus = async (e: any) => {
        setStatus(e.target.value);

        const res = await fetch(`${HOST}/order/${order.id}`, {
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
        const res = await fetch(`${HOST}/order/${order.id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        setRemovePopUp(false);
        if (data.success) {
            emit('order:remove', order.id);
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
    };

    return (
        <Container>
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
                {order.coupon && (
                    <p className="price-coupon">
                        coupon: -{order.coupon.value}%
                    </p>
                )}
                <p className="price-sum">
                    $ <span className="bold">{order.value}</span>
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

const Container = styled.div`
    display: flex;
    padding: 0 1rem;
    margin-bottom: 0.5rem;

    .date {
        margin-bottom: 0.5rem;
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
