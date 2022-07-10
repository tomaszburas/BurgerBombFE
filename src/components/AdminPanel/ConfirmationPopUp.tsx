import styled from 'styled-components';

interface Props {
    title: string;
    setPopUp: (param: boolean) => void;
    handler: () => void;
}

export const ConfirmationPopUp = ({ title, setPopUp, handler }: Props) => {
    return (
        <Container>
            <div className="bg" onClick={() => setPopUp(false)} />
            <div className="wrapper-popup">
                <i
                    className="bx bx-x"
                    title="Close"
                    onClick={() => setPopUp(false)}
                />
                <p className="popup-title">{title}</p>
                <div className="button-container">
                    <button
                        className="color-red"
                        title="No"
                        onClick={() => setPopUp(false)}>
                        No
                    </button>
                    <button title="Yes" onClick={handler}>
                        Yes
                    </button>
                </div>
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

    .wrapper-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.colors.cream};
        padding: 1rem;
        width: 30%;
        height: fit-content;
        z-index: 10;
        color: ${(props) => props.theme.colors.brown};

        .bx-x {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            font-size: ${(props) => props.theme.fontSize.lg};
        }

        .popup-title {
            margin-right: 1rem;
            text-align: center;
        }

        .button-container {
            display: flex;
            justify-content: center;
            gap: 1rem;

            button {
                margin-bottom: 0;
                margin-top: 1rem;
            }

            .color-red {
                background-color: ${(props) => props.theme.colors.red};
            }
        }
    }
`;
