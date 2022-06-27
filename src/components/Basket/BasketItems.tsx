import styled from 'styled-components';
import { BasketItem } from './BasketItem';

export const BasketItems = () => {
    return (
        <Container>
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
        </Container>
    );
};

const Container = styled.div``;
