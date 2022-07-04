import { useEmit, useEventrixState } from 'eventrix';
import { IngredientEntityResponse } from 'types';
import { useEffect } from 'react';
import { HOSTPORT } from '../../../config';
import { LoaderData } from '../LoaderData';
import { NoData } from '../NoData';
import { IngredientsItem } from './IngredientsItem';

export const IngredientsItems = () => {
    const [ingredients] =
        useEventrixState<IngredientEntityResponse[]>('ingredients');
    const emit = useEmit();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${HOSTPORT}/ingredient`, {
                credentials: 'include',
                mode: 'cors',
            });
            const data = await res.json();

            emit('ingredients', data.ingredients);
        })();
    }, [ingredients]);

    if (ingredients === null) {
        return (
            <>
                <LoaderData />
            </>
        );
    }

    return (
        <>
            {ingredients.length === 0 ? (
                <NoData />
            ) : (
                ingredients.map((ingredient) => (
                    <IngredientsItem key={ingredient.id} {...ingredient} />
                ))
            )}
        </>
    );
};
