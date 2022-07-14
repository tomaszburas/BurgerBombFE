import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface Props {
    color?: string;
    height?: number;
    width?: number;
}

export const LoaderData = ({ color, height, width }: Props) => {
    return (
        <Container>
            <TailSpin
                height={height ? height : '80'}
                width={width ? width : '80'}
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
