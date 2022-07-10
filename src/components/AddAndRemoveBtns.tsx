import styled from 'styled-components';

interface Props {
    handleAdd: () => void;
    handleDelete: () => void;
}

export const AddAndRemoveBtns = ({ handleAdd, handleDelete }: Props) => {
    return (
        <Container>
            <button className="plus" title="Add" onClick={handleAdd}>
                +
            </button>
            <button className="minus" title="Remove" onClick={handleDelete}>
                -
            </button>
        </Container>
    );
};

const Container = styled.div`
    button {
        color: ${(props) => props.theme.colors.cream};
        font-size: ${(props) => props.theme.fontSize.base};
        font-weight: bold;
    }

    .plus {
        padding: 0.3rem 0.5rem;
        background-color: ${(props) => props.theme.colors.eden};
        border-radius: 0;
    }

    .minus {
        padding: 0.3rem 0.7rem;
        background-color: ${(props) => props.theme.colors.red};
        border-radius: 0;
    }
`;
