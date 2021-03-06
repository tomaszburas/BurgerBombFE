import styled from 'styled-components';
import { useEmit, useEventrixState } from 'eventrix';
import { InfoEditForm } from './InfoEditForm';
import { InfoItems } from './InfoItems';
import { Form } from 'types';
import { FormBox } from '../../FormBox';

export const InfoContainer = () => {
    const emit = useEmit();
    const [addForm] = useEventrixState<boolean>(Form.ADD);

    return (
        <Container>
            <button title="Edit Info" onClick={() => emit(Form.ADD, true)}>
                Edit Info
            </button>
            <div className="info-container">
                <div className="header">
                    <p className="title">Street:</p>
                    <p className="title">Number:</p>
                    <p className="title">Zip Code:</p>
                    <p className="title">City:</p>
                    <p className="title">Phone:</p>
                    <p className="title">Email:</p>
                    <div className="title">
                        <i className="bx bxs-time" /> Mon-Thu:
                    </div>
                    <div className="title">
                        <i className="bx bxs-time" /> Fri-Sat:
                    </div>
                    <div className="title">
                        <i className="bx bxs-time" /> Sun:
                    </div>
                </div>
                <div className="data-wrapper">
                    <InfoItems />
                </div>
            </div>
            {addForm && (
                <FormBox name={Form.ADD}>
                    <InfoEditForm />
                </FormBox>
            )}
        </Container>
    );
};

const Container = styled.div`
    height: 100%;

    .info-container {
        display: flex;

        .title:not(:last-child) {
            margin-bottom: 0.5rem;
        }

        .bxs-time {
            font-size: ${(props) => props.theme.fontSize.sm};
        }

        .header {
            display: flex;
            flex-direction: column;
            padding: 0.5rem 1rem;
            background-color: ${(props) => props.theme.colors.red};
            font-weight: 500;
        }

        .data-wrapper {
            padding: 0.5rem 1rem;
        }
    }

    button {
        margin-bottom: 0.5rem;
    }
`;
