import styled from 'styled-components';
import { ContactUs } from './ContactUs';
import { OpeningHours } from './OpeningHours';
import { VisitUs } from './VisitUs';

interface Props {
    icon: string;
    name: string;
}

export const ContactItem = ({ icon, name }: Props) => {
    return (
        <Container>
            <div className="top">
                <i className={icon} />
            </div>
            <div className="center">{name}</div>
            <div className="bottom">
                {name === 'VISIT US' && (
                    <VisitUs
                        city="Warszawa"
                        number="42"
                        zipCode="02-321"
                        street="Koluszki"
                    />
                )}
                {name === 'CONTACT US' && (
                    <ContactUs
                        phone="+48 999 999 999"
                        mail="contact@burgerbomb.com"
                    />
                )}
                {name === 'OPENING HOURS' && (
                    <OpeningHours
                        monThu="12PM - 9:30PM"
                        friSat="12PM - 10:30PM"
                        sun="12PM - 9:30PM"
                    />
                )}
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        color: ${(props) => props.theme.colors.yellow};
        font-size: ${(props) => props.theme.fontSize.xl};
        margin-bottom: 0.8rem;
    }
    .center {
        color: ${(props) => props.theme.colors.cream};
        font-weight: bold;
        margin-bottom: 0.8rem;
    }
    .bottom {
        color: ${(props) => props.theme.colors.cream};
        display: flex;
        flex-direction: column;
    }
`;
