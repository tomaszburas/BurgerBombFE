import styled from 'styled-components';
import { useEmit } from 'eventrix';
import { ReactNode } from 'react';
import { Form } from '../../types/formEnum';

interface Props {
    children: ReactNode;
}

export const AddBox = ({ children }: Props) => {
    const emit = useEmit();

    return (
        <Container>
            <div className="bg" onClick={() => emit(Form.ADD, false)} />
            <div className="wrapper-add-box">
                <i
                    className="bx bx-x"
                    title="Close"
                    onClick={() => emit(Form.ADD, false)}
                />
                {children}
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

    .wrapper-add-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.colors.cream};
        padding: 1rem;
        width: fit-content;
        height: fit-content;
        z-index: 10;
    }

    .bx-x {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        font-size: ${(props) => props.theme.fontSize.lg};
    }
`;
