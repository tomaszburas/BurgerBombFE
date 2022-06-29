import { useState } from 'react';
import { AddBox } from '../AddBox';
import styled from 'styled-components';

export const InfoContainer = () => {
    const [addBtn, setAddBtn] = useState(false);

    return (
        <Container>
            <button title="Edit Info" onClick={() => setAddBtn(true)}>
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
                    <p className="title">
                        <i className="bx bxs-time" /> Mon-Thu:
                    </p>
                    <p className="title">
                        <i className="bx bxs-time" /> Fri-Sat:
                    </p>
                    <p className="title">
                        <i className="bx bxs-time" /> Sun:
                    </p>
                </div>
                <div className="data-wrapper">
                    <p className="value">Street</p>
                    <p className="value">Number</p>
                    <p className="value">Zip Code</p>
                    <p className="value">City</p>
                    <p className="value">Phone</p>
                    <p className="value">Email</p>
                    <p className="value">Mon-Thu</p>
                    <p className="value">Fri-Sat</p>
                    <p className="value">Sun</p>
                </div>
            </div>
            {addBtn ? <AddBox setAddBtn={setAddBtn} title="info" /> : null}
        </Container>
    );
};

const Container = styled.div`
    height: 100%;

    .info-container {
        display: flex;

        p:not(:last-child) {
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
        height: 2.5rem;
        background-color: ${(props) => props.theme.colors.eden};
        border: none;
        border-radius: 0.5rem;
        font-size: ${(props) => props.theme.fontSize.base};
        color: ${(props) => props.theme.colors.cream};
        padding: 0 1rem;
        cursor: pointer;
        margin-bottom: 0.5rem;
    }
`;
