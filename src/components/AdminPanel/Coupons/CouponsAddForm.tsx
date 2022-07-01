import styled from 'styled-components';

interface Props {
    setAddBtn: (param: boolean) => void;
}

export const CouponsAddForm = ({ setAddBtn }: Props) => {
    const handlerSaveBtn = () => {
        setAddBtn(false);
    };

    return (
        <Container>
            <form>
                <div className="input-box">
                    <input type="text" id="name" required />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-box">
                    <input
                        type="number"
                        id="value"
                        min="0"
                        max="100"
                        required
                    />
                    <label htmlFor="value">Value</label>
                </div>
                <div className="button-wrapper">
                    <button title="Save" onClick={handlerSaveBtn}>
                        Save
                    </button>
                </div>
            </form>
        </Container>
    );
};

const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;

        .button-wrapper {
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }
    }
`;
