import styled from 'styled-components';
import { SummaryItem } from './SummaryItem';

export const SummaryItems = () => {
    return (
        <Container>
            <SummaryItem />
            <SummaryItem />
            <SummaryItem />
        </Container>
    );
};

const Container = styled.div``;
