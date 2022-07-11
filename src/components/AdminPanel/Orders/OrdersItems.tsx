import { useEffect } from 'react';
import { HOST } from '../../../config';
import { useEmit, useEventrixState } from 'eventrix';
import { OrderEntity } from 'types';
import { NoData } from '../../NoData';
import { LoaderData } from '../../LoaderData';
import { OrdersItem } from './OrdersItem';

export const OrdersItems = () => {
    const emit = useEmit();
    const [order] = useEventrixState<OrderEntity[]>('order');

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOST}/order`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();
            emit('order:set', data.orders);
        })();
    }, [emit]);

    if (order === null) {
        return <LoaderData />;
    }

    return (
        <>
            {order.length === 0 ? (
                <NoData />
            ) : (
                order.map((order: OrderEntity) => (
                    <OrdersItem key={order.id} order={order} />
                ))
            )}
        </>
    );
};
