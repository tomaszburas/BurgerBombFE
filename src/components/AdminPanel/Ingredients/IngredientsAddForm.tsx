import styled from 'styled-components';

interface Props {
    setAddBtn: (param: boolean) => void;
}

export const IngredientsAddForm = ({ setAddBtn }: Props) => {
    const handlerSaveBtn = () => {
        setAddBtn(false);
    };

    return (
        <Container>
            <form>
                <div className="google-input">
                    <input type="text" id="name" name="name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="google-input">
                    <input type="number" id="price" name="price" />
                    <label htmlFor="price">Price</label>
                </div>
                <div className="google-input">
                    <input type="number" id="quantity" name="quantity" />
                    <label htmlFor="quantity">Quantity</label>
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
            margin-top: 0.5rem;
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }

        .google-input {
            position: relative;
            height: fit-content;
            width: fit-content;
            margin: 0.5rem 0;

            label {
                position: absolute;
                left: 10px;
                top: 12px;
                width: max-content;
                transition: all 0.2s ease-in-out;
                background: ${(props) => props.theme.colors.cream};
                padding: 5px 7px;
                border-radius: 10px;
                pointer-events: none;
            }

            input {
                position: relative;
                top: 0;
                left: 0;
                width: 300px;
                height: 2.5rem;
                border-radius: 6px;
                background: ${(props) => props.theme.colors.cream};
                border: 1px solid ${(props) => props.theme.colors.brown};
                font-size: 16px;
                padding: 0 10px;

                &:focus {
                    border: 1px solid ${(props) => props.theme.colors.brown};
                    outline: 1px solid ${(props) => props.theme.colors.brown};
                    -webkit-transition: border 0.2s ease-in-out;
                    transition: border 0.2s ease-in-out;
                }

                &:focus ~ label,
                &:not(:placeholder-shown) ~ label {
                    top: -14px;
                    font-size: 13px;
                }

                &:focus ~ label {
                    font-weight: bolder;
                }
            }
        }
    }
`;
