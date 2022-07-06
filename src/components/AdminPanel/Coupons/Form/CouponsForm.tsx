import { FormEvent } from 'react';
import styled from 'styled-components';
import { NewCouponEntity, Form } from 'types';

interface Props {
    handler: (e: FormEvent) => void;
    form: NewCouponEntity;
    setForm: (elements: NewCouponEntity) => void;
    name: Form;
}

export const CouponsForm = ({ handler, form, setForm, name }: Props) => {
    return (
        <Container>
            <form onSubmit={handler}>
                <div className="input-box">
                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required={name === Form.ADD}
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-box">
                    <input
                        type="number"
                        id="value"
                        min="0"
                        max="100"
                        value={form.value}
                        onChange={(e) =>
                            setForm({ ...form, value: Number(e.target.value) })
                        }
                        required={name === Form.ADD}
                    />
                    <label htmlFor="value">Value</label>
                </div>
                <div className="button-wrapper">
                    <button title="Save">Save</button>
                </div>
            </form>
        </Container>
    );
};

const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;

        .button-wrapper {
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }
    }
`;
