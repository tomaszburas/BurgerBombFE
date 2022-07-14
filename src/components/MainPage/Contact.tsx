import styled from 'styled-components';
import { ContactItem } from '../ContactItem/ContactItem';

export const Contact = () => {
    return (
        <Container id="contact">
            <div className="wrapper">
                <ContactItem icon="bx bxs-map" name="VISIT US" />
                <ContactItem icon="bx bxs-phone" name="CONTACT US" />
                <ContactItem icon="bx bxs-time" name="OPENING HOURS" />
            </div>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.eden};
    display: flex;
    justify-content: center;

    .wrapper {
        width: 80%;
        margin: 2rem 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media only screen and (min-width: 2000px) {
        .wrapper {
            width: 60%;
        }
    }

    @media only screen and (max-width: 1250px) {
        .wrapper {
            width: 90%;
        }
    }

    @media only screen and (max-width: 850px) {
        .wrapper {
            flex-direction: column;
            align-items: center;
            margin-top: 1rem;
        }
    }
`;
