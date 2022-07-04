import { useEmit, useEventrixState } from 'eventrix';
import { BurgerEntityResponse } from 'types';
import { useEffect } from 'react';
import { HOSTPORT } from '../../../config';
import { LoaderData } from '../LoaderData';
import { NoData } from '../NoData';
import { BurgersItem } from './BurgersItem';

export const BurgersItems = () => {
    const [burgers] = useEventrixState<BurgerEntityResponse[]>('burgers');
    // const emit = useEmit();

    // useEffect(() => {
    //     (async () => {
    //         const res = await fetch(`${HOSTPORT}/burger`, {
    //             credentials: 'include',
    //             mode: 'cors',
    //         });
    //         const data = await res.json();
    //
    //         emit('burgers', data.burgers);
    //     })();
    // }, [burgers]);

    if (burgers === null) {
        return (
            <>
                <LoaderData />
            </>
        );
    }

    return (
        <>
            {burgers.length === 0 ? (
                <NoData />
            ) : (
                burgers.map((burger) => (
                    <BurgersItem key={burger.id} {...burger} />
                ))
            )}
        </>
    );
};
