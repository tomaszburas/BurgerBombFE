import styled from 'styled-components';

interface Props {
    setAddBtn: (param: boolean) => void;
}

export const InfoAddForm = ({ setAddBtn }: Props) => {
    const handlerSaveBtn = () => {
        setAddBtn(false);
    };

    return (
        <Container>
            <form>
                <div className="info-wrapper">
                    <div className="info-left">
                        <div className="input-box">
                            <input type="text" id="street" name="street" />
                            <label htmlFor="street">Street</label>
                        </div>
                        <div className="input-box">
                            <input type="number" id="number" name="number" />
                            <label htmlFor="number">Number</label>
                        </div>
                        <div className="input-box">
                            <input type="text" id="zipCode" name="zipCode" />
                            <label htmlFor="zipCode">Zip Code</label>
                        </div>
                        <div className="input-box">
                            <input type="text" id="city" name="city" />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-box">
                            <input type="phone" id="phone" name="phone" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-box">
                            <input type="email" id="email" name="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="input-box">
                            <input
                                type="time"
                                id="monThuFrom"
                                name="monThuFrom"
                            />
                            <label htmlFor="monThuFrom">[From] Mon-Thu</label>
                        </div>
                        <div className="input-box">
                            <input type="time" id="monThuTo" name="monThuTo" />
                            <label htmlFor="monThuTo">[To] Mon-Thu</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="time"
                                id="friSatFrom"
                                name="friSatFrom"
                            />
                            <label htmlFor="friSatFrom">[From] Fri-Sat</label>
                        </div>
                        <div className="input-box">
                            <input type="time" id="friSatTo" name="friSatTo" />
                            <label htmlFor="friSatTo">[To] Fri-Sat</label>
                        </div>
                        <div className="input-box">
                            <input type="time" id="sunFrom" name="sunFrom" />
                            <label htmlFor="sunFrom">[From] Sun</label>
                        </div>
                        <div className="input-box">
                            <input type="time" id="sunTo" name="sunTo" />
                            <label htmlFor="sunTo">[To] Sun</label>
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

        .info-wrapper {
            display: flex;

            .info-right {
                margin-left: 1rem;
            }
        }

        .button-wrapper {
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }

        .input-box {
            input {
                height: 2.5rem;
            }
        }
    }
`;
