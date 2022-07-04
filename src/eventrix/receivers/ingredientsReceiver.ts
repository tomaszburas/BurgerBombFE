import { EventsReceiver } from 'eventrix';
import { IngredientEntityResponse } from 'types';

const ingredientsReceiver = new EventsReceiver(
    [
        'ingredients:set',
        'ingredients:add',
        'ingredients:remove',
        'ingredients:update',
    ],
    (eventName, value, stateManager) => {
        const ingredients = stateManager.getState('ingredients');

        if (eventName === 'ingredients:set') {
            stateManager.setState('ingredients', value);
        }
        if (eventName === 'ingredients:add') {
            stateManager.setState('ingredients', [...ingredients, value]);
        }
        if (eventName === 'ingredients:remove') {
            stateManager.setState(
                'ingredients',
                ingredients.filter(
                    (ingredient: IngredientEntityResponse) =>
                        ingredient.id !== value
                )
            );
        }
        if (eventName === 'ingredients:update') {
            stateManager.setState(
                'ingredients',
                ingredients.map((ingredient: IngredientEntityResponse) => {
                    if (ingredient.id === value.id) {
                        return value;
                    } else {
                        return ingredient;
                    }
                })
            );
        }
    }
);

export default ingredientsReceiver;
