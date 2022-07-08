import { useEventrixState } from 'eventrix';
import { IngredientEntityResponse } from 'types';
import { LoaderData } from '../../LoaderData';
import { NoData } from '../NoData';
import { IngredientsItem } from './IngredientsItem';

export const IngredientsItems = () => {
    const [ingredients] =
        useEventrixState<IngredientEntityResponse[]>('ingredients');

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
