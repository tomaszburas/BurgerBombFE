import styled from 'styled-components';
import { ContactItem } from './ContactItem/ContactItem';

export const Contact = () => {
    return (
        <Container>
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
        width: 1200px;
        margin: 2rem 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
