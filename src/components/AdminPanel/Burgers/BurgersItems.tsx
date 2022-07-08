import { useEventrixState } from 'eventrix';
import { BurgerEntityResponse } from 'types';
import { LoaderData } from '../../LoaderData';
import { NoData } from '../NoData';
import { BurgersItem } from './BurgersItem';

export const BurgersItems = () => {
    const [burgers] = useEventrixState<BurgerEntityResponse[]>('burgers');

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
                burgers.map((burger) => {
                    return <BurgersItem key={burger.id} {...burger} />;
                })
            )}
        </>
    );
};
