import { useState } from 'react';
import { AddBox } from '../AddBox';
import styled from 'styled-components';
import { AdminPanelItems } from '../../../types/admin-panel-items';

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
                    <p className="title">Street</p>
                    <p className="title">Number</p>
                    <p className="title">Zip Code</p>
                    <p className="title">City</p>
                    <p className="title">Phone</p>
                    <p className="title">Email</p>
                    <p className="title">Mon-Thu</p>
                    <p className="title">Fri-Sat</p>
                    <p className="title">Sun</p>
                </div>
            </div>
            {addBtn && (
                <AddBox setAddBtn={setAddBtn} title={AdminPanelItems.INFO} />
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
