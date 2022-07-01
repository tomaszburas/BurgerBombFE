import styled from 'styled-components';
import { BasketItem } from './BasketItem';

interface Props {
    title?: string;
}

export const BasketItems = ({ title }: Props) => {
    return (
        <Container>
            <BasketItem title={title} />
            <BasketItem title={title} />
            <BasketItem title={title} />
            <BasketItem title={title} />
            <BasketItem title={title} />
            <BasketItem title={title} />
            <BasketItem title={title} />
        </Container>
    );
};

const Container = styled.div``;
