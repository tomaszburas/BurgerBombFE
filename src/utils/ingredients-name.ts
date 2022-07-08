export const ingredientsName = (arr: any): string => {
    return arr.map((ingredient: any) => ingredient.name).join(', ');
};
