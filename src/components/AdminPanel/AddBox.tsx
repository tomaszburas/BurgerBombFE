import styled from 'styled-components';
import { AdminsAddForm } from './Admins/AdminsAddForm';

interface Props {
    setAddBtn: (param: boolean) => void;
    title: string;
}

export const AddBox = ({ setAddBtn, title }: Props) => {
    return (
        <Container>
            <i
                className="bx bx-x"
                title="Close"
                onClick={() => setAddBtn(false)}
            />
            {title === 'admins' ? (
                <AdminsAddForm setAddBtn={setAddBtn} />
            ) : null}
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.cream};
    padding: 1rem;

    .bx-x {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        font-size: ${(props) => props.theme.fontSize.lg};
    }
`;
