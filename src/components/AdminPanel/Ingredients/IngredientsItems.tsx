import { useEventrixState } from 'eventrix';
import { LoaderData } from '../../LoaderData';
import { NoData } from '../../NoData';
import { IngredientsItem } from './IngredientsItem';
import { IngredientEntity } from 'types';

export const IngredientsItems = () => {
    const [ingredients] = useEventrixState<IngredientEntity[]>('ingredients');

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
