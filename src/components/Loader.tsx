import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader = () => {
    return (
        <Container>
            <div className="loader">
                <TailSpin
                    height="80"
                    width="80"
                    color="#125B50"
                    ariaLabel="loading"
                />
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.cream};

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
