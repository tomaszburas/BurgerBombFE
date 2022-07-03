import { useEmit, useEventrixState } from 'eventrix';
import { IngredientEntityResponse } from 'types';
import { useEffect } from 'react';
import { HOSTPORT } from '../../../config';
import { LoaderData } from '../LoaderData';
import { NoData } from '../NoData';
import styled from 'styled-components';
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
            <Container>
                <LoaderData />
            </Container>
        );
    }

    return (
        <Container>
            {ingredients.length === 0 ? (
                <NoData />
            ) : (
                ingredients.map((ingredient) => (
                    <IngredientsItem
                        key={ingredient.id}
                        id={ingredient.id}
                        name={ingredient.name}
                        price={ingredient.price}
                        quantity={ingredient.quantity}
                    />
                ))
            )}
        </Container>
    );
};

const Container = styled.div``;
