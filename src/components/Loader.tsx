import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader = () => {
    return (
        <Container>
            <TailSpin
                height="80"
                width="80"
                color="#125B50"
                ariaLabel="loading"
            />
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
