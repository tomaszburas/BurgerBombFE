import styled from 'styled-components';

interface Props {
    setAddBtn: (param: boolean) => void;
}

export const BurgersAddForm = ({ setAddBtn }: Props) => {
    const handlerSaveBtn = () => {
        setAddBtn(false);
    };

    return (
        <Container>
            <form>
                <div className="google-input">
                    <input type="text" id="name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="google-input">
                    <input type="number" id="price" />
                    <label htmlFor="price">Price</label>
                </div>
                <div className="google-input">
                    <span className="title">Image</span>
                    <input type="file" id="img" />
                </div>
                <div className="cb-input">
                    <span className="title">Ingredients</span>
                    <div className="cb-wrapper">
                        <div className="cb-container">
                            <input type="checkbox" id="tomato" name="tomato" />
                            <label htmlFor="tomato">tomato</label>
                        </div>
                        <div className="cb-container">
                            <input type="checkbox" id="tomato" name="tomato" />
                            <label htmlFor="tomato">tomato</label>
                        </div>
                        <div className="cb-container">
                            <input type="checkbox" id="tomato" name="tomato" />
                            <label htmlFor="tomato">tomato</label>
                        </div>
                        <div className="cb-container">
                            <input type="checkbox" id="tomato" name="tomato" />
                            <label htmlFor="tomato">tomato</label>
                        </div>
                        <div className="cb-container">
                            <input type="checkbox" id="tomato" name="tomato" />
                            <label htmlFor="tomato">tomato</label>
                        </div>
                        <div className="cb-container">
                            <input type="checkbox" id="tomato" name="tomato" />
                            <label htmlFor="tomato">tomato</label>
                        </div>
                        <div className="cb-container">
                            <input type="checkbox" id="tomato" name="tomato" />
                            <label htmlFor="tomato">tomato</label>
                        </div>
                    </div>
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

        .cb-input {
            position: relative;
            margin: 0.7rem 0;

            .title {
                position: absolute;
                left: 10px;
                top: 12px;
                width: max-content;
                transition: all 0.2s ease-in-out;
                padding: 5px 7px;
                border-radius: 10px;
                pointer-events: none;

                &:focus,
                &:not(:placeholder-shown) {
                    top: -14px;
                    font-size: 13px;
                }

                &:focus {
                    font-weight: bolder;
                }
            }

            .cb-wrapper {
                height: 10rem;
                overflow: auto;
                margin-top: 0.5rem;

                .cb-container {
                    font-size: ${(props) => props.theme.fontSize.sm};
                    display: flex;
                    align-items: center;
                }

                .cb-container:not(:first-child) {
                    margin-top: 0.5rem;
                }
            }
        }

        .google-input {
            position: relative;
            height: fit-content;
            width: fit-content;
            margin: 0.7rem 0;

            .title {
                position: absolute;
                left: 10px;
                top: 12px;
                width: max-content;
                transition: all 0.2s ease-in-out;
                padding: 5px 7px;
                border-radius: 10px;
                pointer-events: none;

                &:focus,
                &:not(:placeholder-shown) {
                    top: -14px;
                    font-size: 13px;
                }

                &:focus {
                    font-weight: bolder;
                }
            }

            input[type='file'] {
                margin-top: 0.5rem;
            }

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

            input[type='text'],
            input[type='number'] {
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
