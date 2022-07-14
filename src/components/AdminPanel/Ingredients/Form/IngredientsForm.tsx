import styled from 'styled-components';
import { FormEvent } from 'react';
import { NewIngredientEntity, Form } from 'types';
import { LoaderData } from '../../../LoaderData';

interface Props {
    handler: (e: FormEvent) => void;
    form: NewIngredientEntity;
    setForm: (elements: NewIngredientEntity) => void;
    name: Form;
    loading: boolean;
}

export const IngredientsForm = ({
    handler,
    form,
    setForm,
    name,
    loading,
}: Props) => {
    return (
        <Container>
            <form onSubmit={handler}>
                <div className="input-box">
                    <input
                        type="text"
                        id="name"
                        name="name"
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
                        id="price"
                        name="price"
                        value={form.price}
                        onChange={(e) =>
                            setForm({ ...form, price: Number(e.target.value) })
                        }
                        required={name === Form.ADD}
                    />
                    <label htmlFor="price">Price</label>
                </div>
                <div className="button-wrapper">
                    {loading ? (
                        <LoaderData width={30} height={30} />
                    ) : (
                        <button title="Save">Save</button>
                    )}
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
