import styled from 'styled-components';
import { AdminsAddForm } from './Admins/AdminsAddForm';
import { BurgersAddForm } from './Burgers/BurgersAddForm';
import { CouponsAddForm } from './Coupons/CouponsAddForm';
import { InfoAddForm } from './Info/InfoAddForm';
import { IngredientsAddForm } from './Ingredients/IngredientsAddForm';

interface Props {
    setAddBtn: (param: boolean) => void;
    title: string;
}

export const AddBox = ({ setAddBtn, title }: Props) => {
    return (
        <Container>
            <div className="bg" onClick={() => setAddBtn(false)} />
            <div className="wrapper-add-box">
                <i
                    className="bx bx-x"
                    title="Close"
                    onClick={() => setAddBtn(false)}
                />
                {title === 'admins' ? (
                    <AdminsAddForm setAddBtn={setAddBtn} />
                ) : null}
                {title === 'burgers' ? (
                    <BurgersAddForm setAddBtn={setAddBtn} />
                ) : null}
                {title === 'info' ? (
                    <InfoAddForm setAddBtn={setAddBtn} />
                ) : null}
                {title === 'ingredients' ? (
                    <IngredientsAddForm setAddBtn={setAddBtn} />
                ) : null}
                {title === 'coupons' ? (
                    <CouponsAddForm setAddBtn={setAddBtn} />
                ) : null}
            </div>
        </Container>
    );
};

const Container = styled.div`
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100vw;
        height: 100vh;
        background-color: rgba(18, 91, 80, 0.8);
        backdrop-filter: blur(4px);
    }

    .wrapper-add-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.colors.cream};
        padding: 1rem;
        width: fit-content;
        height: fit-content;
        z-index: 10;
    }

    .bx-x {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        font-size: ${(props) => props.theme.fontSize.lg};
    }
`;
