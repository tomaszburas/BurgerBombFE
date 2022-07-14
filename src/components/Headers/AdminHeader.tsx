import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { API_URL, PREFIX } from '../../config';
import { useEmit } from 'eventrix';
import { toast } from 'react-toastify';

export const AdminHeader = () => {
    const navigate = useNavigate();
    const emit = useEmit();

    const logout = async () => {
        const res = await fetch(`${API_URL}/admin/logout`, {
            credentials: 'include',
            mode: 'cors',
        });
        const data = await res.json();

        if (data.success) {
            emit('isAuth', false);
            navigate('/login');
            toast.success(data.message);
        }
    };

    return (
        <Container>
            <Link to={PREFIX ? `${PREFIX}` : `/`}>
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <ul>
                <li title="Logout" onClick={logout}>
                    Logout
                </li>
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
    margin-bottom: 0.5rem;

    .logo {
        height: 4rem;
        cursor: pointer;
    }

    li {
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
