import styled from 'styled-components';
import { AddAndRemoveBtns } from '../AddAndRemoveBtns';
import { API_URL } from '../../config';
import { ingredientsName } from '../../utils/ingredients-name';
import {
    BasketEntity,
    BurgerIngredient,
    IngredientEntity,
    MeatPreparation,
} from 'types';
import { useEffect, useState } from 'react';
import { useEmit, useEventrixState } from 'eventrix';
import { LoaderData } from '../LoaderData';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { round } from '../../utils/round';

interface Props {
    setAddBtn: (param: boolean) => void;
    id: string;
    name: string;
    price: number;
    image: string;
    ingredients: BurgerIngredient[];
    setPopUp: (param: boolean) => void;
}

export const AddBurgerToBasket = ({
    setAddBtn,
    id,
    name,
    price,
    image,
    ingredients,
    setPopUp,
}: Props) => {
    const emit = useEmit();
    const [totalValue, setTotalValue] = useState(price);
    const [ingredientsValue, setIngredientsValue] = useState(0);
    const [meatPreparation, setMeatPreparation] =
        useState<MeatPreparation | null>(null);
    const [burgerQuantity, setBurgerQuantity] = useState(1);
    const [allIngredients, setAllIngredients] = useState<IngredientEntity[]>(
        []
    );
    const [checkedIngredients, setCheckedIngredients] = useState<
        IngredientEntity[]
    >([]);
    const [uuid] = useState(uuidv4());
    const [basket] = useEventrixState<BasketEntity[]>('basket');
    const [burgerState, setBurgerState] = useState<BasketEntity>({
        id: uuid,
        burgerId: id,
        name,
        price,
        burgerQuantity,
        extraIngredients: checkedIngredients,
        totalValue,
        meatPreparation,
    });

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/ingredient`, {
                credentials: 'include',
                mode: 'cors',
            });

            const data = await res.json();
            setAllIngredients(data.ingredients);
        })();
    }, []);

    useEffect(() => {
        handleTotalValue();
        setBurgerState({
            id: uuid,
            burgerId: id,
            name,
            price,
            burgerQuantity,
            extraIngredients: checkedIngredients,
            totalValue,
            meatPreparation,
        });
    }, [ingredientsValue, burgerQuantity, totalValue, meatPreparation]);

    const filterIngredients = (allIngredients: IngredientEntity[]) => {
        return allIngredients.filter((element) => {
            const ingredient = ingredients.find((el) => el.id === element.id);
            return !ingredient;
        });
    };

    const handleCheckInput = (e: any) => {
        const ingredient = allIngredients.find(
            (el) => el.id === e.target.value
        );
        if (e.target.checked) {
            if (ingredient) {
                setCheckedIngredients((prev) => [...prev, ingredient]);
                handleAddIngredientValue(e.target.value);
            }
        } else {
            setCheckedIngredients((prev) =>
                prev.filter((el) => el.id !== e.target.value)
            );
            handleDeleteIngredientValue(e.target.value);
        }
    };

    const handleAddIngredientValue = (id: string) => {
        const price = allIngredients.find(
            (ingredient) => ingredient.id === id
        )?.price;
        setIngredientsValue((prev) => prev + Number(price));
    };

    const handleDeleteIngredientValue = (id: string) => {
        const price = allIngredients.find(
            (ingredient) => ingredient.id === id
        )?.price;
        setIngredientsValue((prev) => prev - Number(price));
    };

    const handleTotalValue = () => {
        setTotalValue(round(burgerQuantity * (price + ingredientsValue)));
    };

    const handleAddToBasket = () => {
        if (meatPreparation === null) {
            toast.error('Please select the degree of meat preparation');
            return;
        }

        setAddBtn(false);
        const basketState = basket.find(
            (el) => el.burgerId === burgerState.burgerId
        );

        if (basketState) {
            if (
                basketState.burgerId === burgerState.burgerId &&
                basketState.meatPreparation === burgerState.meatPreparation
            ) {
                const ingredientsCompare = basketState.extraIngredients
                    .map((ingredient) => {
                        return !!burgerState.extraIngredients.find(
                            (element) => element.id === ingredient.id
                        );
                    })
                    .every((el) => el);

                if (
                    ingredientsCompare ||
                    (basketState.extraIngredients.length === 0 &&
                        burgerState.extraIngredients.length === 0)
                ) {
                    const value = {
                        id: basketState.id,
                        burgerId: basketState.burgerId,
                        name: basketState.name,
                        price: basketState.price,
                        extraIngredients: basketState.extraIngredients,
                        burgerQuantity:
                            burgerState.burgerQuantity +
                            basketState.burgerQuantity,
                        totalValue:
                            burgerState.totalValue + basketState.totalValue,
                        meatPreparation: basketState.meatPreparation,
                    };

                    emit('basket:update', value);
                    setPopUp(true);
                    return;
                }
            }
        }

        setPopUp(true);
        emit('basket:add', burgerState);
    };

    const addBtn = () => {
        setBurgerQuantity((prev: number) => prev + 1);
    };

    const deleteBtn = () => {
        if (burgerQuantity === 1) return;
        setBurgerQuantity((prev: number) => prev - 1);
    };

    return (
        <Container>
            <div className="bg" onClick={() => setAddBtn(false)} />
            <div className="wrapper-add-burger">
                <i
                    className="bx bx-x"
                    title="Close"
                    onClick={() => setAddBtn(false)}
                />
                <div className="burger-top">
                    <img
                        src={`${API_URL}/../images/${image}`}
                        alt={`${name} img`}
                    />
                </div>
                <div className="burger-center">
                    <p className="name">{name.toUpperCase()} BURGER</p>
                    <p className="ingredients">
                        {ingredientsName(ingredients)}
                    </p>
                </div>
                <div className="burger-bottom">
                    <p className="title">Choice of Meat Preparation</p>
                    <div className="frying-container">
                        <div className="frying-wrapper">
                            <input
                                type="radio"
                                id="rare"
                                name="meatPreparation"
                                value={MeatPreparation.RARE}
                                onChange={() =>
                                    setMeatPreparation(MeatPreparation.RARE)
                                }
                            />
                            <label htmlFor="rare">{MeatPreparation.RARE}</label>
                        </div>
                        <div className="frying-wrapper">
                            <input
                                type="radio"
                                id="medium"
                                name="meatPreparation"
                                value={MeatPreparation.MEDIUM}
                                onChange={() =>
                                    setMeatPreparation(MeatPreparation.MEDIUM)
                                }
                            />
                            <label htmlFor="medium">
                                {MeatPreparation.MEDIUM}
                            </label>
                        </div>
                        <div className="frying-wrapper">
                            <input
                                type="radio"
                                id="wellDone"
                                name="meatPreparation"
                                value={MeatPreparation.WELL_DONE}
                                onChange={() =>
                                    setMeatPreparation(
                                        MeatPreparation.WELL_DONE
                                    )
                                }
                            />
                            <label htmlFor="wellDone">
                                {MeatPreparation.WELL_DONE}
                            </label>
                        </div>
                    </div>

                    <p className="title">Extra Ingredients</p>
                    {allIngredients === null ? (
                        <LoaderData />
                    ) : (
                        filterIngredients(allIngredients).map(
                            (ingredient: IngredientEntity) => (
                                <div className="checkbox" key={ingredient.id}>
                                    <div className="checkbox-left">
                                        <input
                                            type="checkbox"
                                            id={ingredient.id}
                                            value={ingredient.id}
                                            onChange={handleCheckInput}
                                        />
                                        <label htmlFor={ingredient.id}>
                                            {ingredient.name}
                                        </label>
                                    </div>
                                    <div className="checkbox-right">
                                        +${ingredient.price}
                                    </div>
                                </div>
                            )
                        )
                    )}
                </div>
                {burgerQuantity > 1 && (
                    <div className="burger-quantity-container">
                        Number of burgers:{' '}
                        <span className="burger-quantity">
                            {burgerQuantity}
                        </span>
                    </div>
                )}
                <div className="summary-container">
                    <div className="quantity">
                        <AddAndRemoveBtns
                            handleAdd={addBtn}
                            handleDelete={deleteBtn}
                        />
                    </div>
                    <p className="total-value">$ {totalValue}</p>
                    <button title="Add to basket" onClick={handleAddToBasket}>
                        Add
                    </button>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100vw;
        height: 100vh;
        background-color: rgba(18, 91, 80, 0.8);
        backdrop-filter: blur(4px);
    }

    .wrapper-add-burger {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.colors.cream};
        color: ${(props) => props.theme.colors.brown};
        padding: 1rem;
        z-index: 10;
        width: 35%;
        height: 80vh;
        overflow: auto;

        .bx-x {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            font-size: ${(props) => props.theme.fontSize.lg};
        }

        .burger-top {
            display: flex;
            justify-content: center;

            img {
                width: 50%;
            }
        }

        .burger-center {
            .name {
                text-align: center;
                padding: 0.7rem;
                background-color: ${(props) => props.theme.colors.eden};
                color: ${(props) => props.theme.colors.cream};
            }

            .ingredients {
                padding: 0.5rem;
                font-size: ${(props) => props.theme.fontSize.sm};
                background-color: ${(props) => props.theme.colors.yellow};
            }
        }

        .burger-bottom {
            margin-top: 1rem;
            width: 100%;

            .title {
                text-align: center;
                padding: 0.5rem;
                border: 1px solid;
            }

            .frying-container {
                display: flex;
                justify-content: space-between;

                .frying-wrapper {
                    margin: 1rem 0;
                    display: flex;

                    label {
                        cursor: pointer;
                    }

                    input {
                        cursor: pointer;
                        position: absolute;
                        opacity: 0;
                        + label {
                            &:before {
                                content: '';
                                background: ${(props) =>
                                    props.theme.colors.cream};
                                border-radius: 100%;
                                border: 2px solid
                                    ${(props) => props.theme.colors.brown};
                                display: inline-block;
                                width: 1.2rem;
                                height: 1.2rem;
                                position: relative;
                                top: 0.2rem;
                                margin-right: 0.5rem;
                                vertical-align: center;
                                cursor: pointer;
                                transition: all 250ms ease;
                            }
                        }
                        &:checked {
                            + label {
                                &:before {
                                    background-color: ${(props) =>
                                        props.theme.colors.brown};
                                    box-shadow: inset 0 0 0 4px
                                        ${(props) => props.theme.colors.cream};
                                }
                            }
                        }
                    }
                }
            }

            .checkbox {
                margin-top: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                input {
                    transform: scale(2);
                    margin-right: 1rem;
                }
            }
        }

        .burger-quantity-container {
            margin-top: 1rem;
            background: ${(props) => props.theme.colors.yellow};
            text-align: center;
            padding: 0.5rem;

            .burger-quantity {
                font-weight: 500;
                background: ${(props) => props.theme.colors.red};
                padding: 0 0.5rem;
            }
        }

        .summary-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 1rem;

            .quantity {
                text-align: center;
            }

            .total-value {
                font-weight: 500;
            }
        }
    }

    @media only screen and (max-width: 1300px) {
        .wrapper-add-burger {
            width: 60%;
        }
    }

    @media only screen and (max-width: 850px) {
        .wrapper-add-burger {
            width: 80%;
            height: 90vh;
        }
    }

    @media only screen and (max-width: 550px) {
        .wrapper-add-burger {
            width: 90%;
            .burger-bottom {
                .frying-container {
                    .frying-wrapper {
                        input {
                            + label {
                                &:before {
                                    width: 1rem;
                                    height: 1rem;
                                    position: relative;
                                }
                            }
                        }
                    }
                }

                .checkbox {
                    input {
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
`;
