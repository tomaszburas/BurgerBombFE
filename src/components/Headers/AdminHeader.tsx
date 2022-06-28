import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const AdminHeader = () => {
    return (
        <Container>
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <ul>
                <Link to="/login">
                    <li title="Logout">Logout</li>
                </Link>
            </ul>
            <div className="path">
                <p className="title">ADMIN PANEL</p>
            </div>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    .logo {
        height: 4rem;
        cursor: pointer;
    }

    .path {
        display: flex;
        align-items: center;

        .title {
            color: ${(props) => props.theme.colors.eden};
            padding: 0.5rem 1rem;
            border: 1px solid ${(props) => props.theme.colors.eden};
        }
    }
`;
