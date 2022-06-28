import styled from 'styled-components';

export const AdminsItem = () => {
    return (
        <Container>
            <p className="email">tomash194@gmail.com</p>
            <p className="role">Super Admin</p>
            <div className="nav">
                <i className="bx bxs-edit" title="Edit" />
                <i className="bx bx-trash" title="Remove" />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 0 1rem;
    margin-bottom: 0.5rem;

    .bxs-edit {
        color: ${(props) => props.theme.colors.eden};
        cursor: pointer;
    }

    .bx-trash {
        color: ${(props) => props.theme.colors.red};
        cursor: pointer;
    }

    .nav {
        display: flex;
        justify-content: center;
    }
`;
