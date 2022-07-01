import styled from 'styled-components';

interface Props {
    setAddBtn: (param: boolean) => void;
}

export const AdminsAddForm = ({ setAddBtn }: Props) => {
    const handlerSaveBtn = () => {
        setAddBtn(false);
    };

    return (
        <Container>
            <form>
                <div className="input-box">
                    <input type="email" id="email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-box">
                    <input type="password" id="password" />
                    <label htmlFor="password">Password</label>
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
