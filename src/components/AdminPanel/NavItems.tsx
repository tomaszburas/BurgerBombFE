import styled from 'styled-components';

export const NavItems = () => {
    return (
        <Container>
            <i className="bx bxs-edit" title="Edit" />
            <i className="bx bx-trash" title="Remove" />
        </Container>
    );
};

const Container = styled.div`
    .bxs-edit {
        color: ${(props) => props.theme.colors.eden};
        cursor: pointer;
    }

    .bx-trash {
        color: ${(props) => props.theme.colors.red};
        cursor: pointer;
    }
`;
