import styled from 'styled-components';

export const BotdContainer = () => {
    return (
        <Container>
            <div className="header">Burger of the day</div>
            <div className="data-wrapper">
                <label htmlFor="burger">Choose a burger:</label>
                <select name="burger" id="burger">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <button>Save</button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0.5rem 1rem;
        background-color: ${(props) => props.theme.colors.red};
        font-weight: 500;
    }

    .data-wrapper {
        margin-top: 1rem;
        display: flex;
        align-items: center;

        label {
            margin-right: 1rem;
        }

        select {
            margin-right: 1rem;
            padding: 0.5rem;
            font-size: ${(props) => props.theme.fontSize.sm};
            background: ${(props) => props.theme.colors.cream};
        }
    }

    button {
        height: 2.5rem;
        background-color: ${(props) => props.theme.colors.eden};
        border: none;
        border-radius: 0.5rem;
        font-size: ${(props) => props.theme.fontSize.base};
        color: ${(props) => props.theme.colors.cream};
        padding: 0 1rem;
        cursor: pointer;
    }
`;
