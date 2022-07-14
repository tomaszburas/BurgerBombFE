import styled from 'styled-components';
import { BasketItem } from './BasketItem';
import { useEventrixState } from 'eventrix';
import { BasketEntity } from 'types';
import { Link } from 'react-router-dom';
import { PREFIX } from '../../config';

interface Props {
    title?: string;
}

export const BasketItems = ({ title }: Props) => {
    const [basket] = useEventrixState<BasketEntity[]>('basket');

    return (
        <Container>
            {basket.length === 0 ? (
                <div className="empty">
                    <p className="empty-title">empty</p>
                    <Link to={PREFIX ? `${PREFIX}` : `/`}>
                        <button title="Go to menu">Go to menu</button>
                    </Link>
                </div>
            ) : (
                basket.map((el) => (
                    <BasketItem key={el.id} title={title} burger={el} />
                ))
            )}
        </Container>
    );
};

const Container = styled.div`
    .empty {
        display: flex;
        align-items: center;
        flex-direction: column;

        .empty-title {
            font-style: italic;
            margin-bottom: 1rem;
        }
    }
`;
