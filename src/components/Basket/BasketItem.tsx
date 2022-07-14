import styled from 'styled-components';
import { AddAndRemoveBtns } from '../AddAndRemoveBtns';
import { BasketEntity } from 'types';
import { useEmit } from 'eventrix';
import { useEffect, useState } from 'react';
import { round } from '../../utils/round';

interface Props {
    title?: string;
    burger: BasketEntity;
}

export const BasketItem = ({ title, burger }: Props) => {
    const [totalValue, setTotalValue] = useState(burger.totalValue);
    const [burgerQuantity, setBurgerQuantity] = useState(burger.burgerQuantity);
    const [unmount, setUnmount] = useState(false);
    const emit = useEmit();

    useEffect(() => {
        (async () => {
            if (burgerQuantity === 0) {
                setUnmount(true);
                await emit('basket:remove', burger.id);
                return;
            }

            await emit('basket:update', {
                ...burger,
                totalValue,
                burgerQuantity,
            });
        })();
    }, [burgerQuantity]);

    const handleAdd = () => {
        setTotalValue((prev) =>
            round(prev + burger.totalValue / burger.burgerQuantity)
        );
        setBurgerQuantity((prev) => prev + 1);
    };

    const handleDelete = () => {
        setBurgerQuantity((prev) => prev - 1);
        setTotalValue((prev) =>
            round(prev - burger.totalValue / burger.burgerQuantity)
        );
    };

    if (unmount) return null;

    return (
        <Container>
            <div className="left">
                <p className="burger">
                    {burgerQuantity} x {burger.name.toUpperCase()} BURGER
                </p>
                {burger.extraIngredients.length > 0 &&
                    burger.extraIngredients.map((ingredient) => (
                        <p key={ingredient.id} className="ingredient">
                            + {ingredient.name}
                        </p>
                    ))}
                <p className="frying">meat: {burger.meatPreparation}</p>
            </div>
            {title !== 'summary' && (
                <div className="center">
                    {
                        <AddAndRemoveBtns
                            handleAdd={handleAdd}
                            handleDelete={handleDelete}
                        />
                    }
                </div>
            )}
            <div className="right">
                <p className="price">$ {totalValue}</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .left {
        width: 55%;

        .ingredient {
            margin-left: 1.5rem;
        }
    }
    .center {
        width: 25%;
        text-align: center;
    }

    .right {
        width: 20%;
        text-align: right;
    }
`;
