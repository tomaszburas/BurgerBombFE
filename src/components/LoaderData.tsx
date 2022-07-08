import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface Props {
    color?: string;
}

export const LoaderData = ({ color }: Props) => {
    return (
        <Container>
            <TailSpin
                height="80"
                width="80"
                color={color ? color : '#125B50'}
                ariaLabel="loading"
            />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
`;
