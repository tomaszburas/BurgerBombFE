import { LoaderData } from '../../../LoaderData';
import { NoData } from '../../../NoData';
import styled from 'styled-components';
import { FormEvent } from 'react';
import { BurgerForm, Form, IngredientEntity } from 'types';
import { useEventrixState } from 'eventrix';

interface Props {
    handler: (e: FormEvent) => void;
    name: Form;
    form: any;
    setForm: (elements: BurgerForm) => void;
}

export const BurgersForm = ({ handler, form, setForm, name }: Props) => {
    const [ingredients] = useEventrixState<IngredientEntity[]>('ingredients');

    const handleCheckInput = (id: string) => {
        const checked = form.ingredients.includes(id);
        let newIngredient: string[];

        if (checked) {
            newIngredient = form.ingredients.filter((e: string) => e !== id);
        } else {
            newIngredient = [...form.ingredients, id];
        }

        setForm({ ...form, ingredients: newIngredient });
    };

    const handleActiveInput = (e: any) => {
        setForm({ ...form, active: e.target.checked });
    };

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
                        id="price"
                        value={form.price}
                        onChange={(e) =>
                            setForm({ ...form, price: Number(e.target.value) })
                        }
                        required={name === Form.ADD}
                    />
                    <label htmlFor="price">Price</label>
                </div>
                <div className="input-box">
                    <span className="title">Image</span>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        accept="image/png, image/jpeg"
                        onChange={(e: any) => {
                            setForm({ ...form, img: e.target.files[0] });
                        }}
                        required={name === Form.ADD}
                    />
                </div>
                <div className="cb-input">
                    <span className="title">Active in menu</span>
                    <div className="cb-wrapper">
                        <div className="cb-container">
                            <input
                                type="checkbox"
                                id="active"
                                name="active"
                                checked={form.active}
                                onChange={handleActiveInput}
                            />
                            <label htmlFor="active">active</label>
                        </div>
                    </div>
                </div>
                <div className="cb-input">
                    <span className="title">Ingredients</span>
                    <div className="cb-wrapper overflow">
                        {ingredients === null ? (
                            <LoaderData />
                        ) : ingredients.length > 0 ? (
                            ingredients.map((ingredient) => (
                                <div
                                    className="cb-container"
                                    key={ingredient.id}>
                                    <input
                                        type="checkbox"
                                        id={ingredient.id}
                                        name={ingredient.id}
                                        checked={form.ingredients.includes(
                                            ingredient.id
                                        )}
                                        onChange={() =>
                                            handleCheckInput(ingredient.id)
                                        }
                                    />
                                    <label htmlFor={ingredient.id}>
                                        {ingredient.name}
                                    </label>
                                </div>
                            ))
                        ) : (
                            <NoData />
                        )}
                    </div>
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
            margin-top: 0.5rem;
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }

        .cb-input {
            position: relative;
            margin: 0.7rem 0;

            .title {
                position: absolute;
                left: 10px;
                top: 12px;
                width: max-content;
                transition: all 0.2s ease-in-out;
                padding: 5px 7px;
                border-radius: 10px;
                pointer-events: none;

                &:focus,
                &:not(:placeholder-shown) {
                    top: -14px;
                    font-size: 13px;
                }

                &:focus {
                    font-weight: bolder;
                }
            }

            .overflow {
                overflow: auto;
            }

            .cb-wrapper {
                max-height: 10rem;
                margin-top: 0.7rem;

                .cb-container {
                    font-size: ${(props) => props.theme.fontSize.sm};
                    display: flex;
                    align-items: center;
                }

                .cb-container:not(:first-child) {
                    margin-top: 0.5rem;
                }
            }
        }

        .input-box {
            position: relative;
            height: fit-content;
            width: fit-content;
            margin: 0.7rem 0;

            .title {
                position: absolute;
                left: 10px;
                top: 12px;
                width: max-content;
                transition: all 0.2s ease-in-out;
                padding: 5px 7px;
                border-radius: 10px;
                pointer-events: none;

                &:focus,
                &:not(:placeholder-shown) {
                    top: -14px;
                    font-size: 13px;
                }

                &:focus {
                    font-weight: bolder;
                }
            }

            input[type='file'] {
                margin-top: 0.5rem;
            }

            label {
                position: absolute;
                left: 10px;
                top: 12px;
                width: max-content;
                transition: all 0.2s ease-in-out;
                background: ${(props) => props.theme.colors.cream};
                padding: 5px 7px;
                border-radius: 10px;
                pointer-events: none;
            }

            input[type='text'],
            input[type='number'] {
                position: relative;
                top: 0;
                left: 0;
                width: 300px;
                height: 2.5rem;
                border-radius: 6px;
                background: ${(props) => props.theme.colors.cream};
                border: 1px solid ${(props) => props.theme.colors.brown};
                font-size: 16px;
                padding: 0 10px;

                &:focus {
                    border: 1px solid ${(props) => props.theme.colors.brown};
                    outline: 1px solid ${(props) => props.theme.colors.brown};
                    -webkit-transition: border 0.2s ease-in-out;
                    transition: border 0.2s ease-in-out;
                }

                &:focus ~ label,
                &:not(:placeholder-shown) ~ label {
                    top: -14px;
                    font-size: 13px;
                }

                &:focus ~ label {
                    font-weight: bolder;
                }
            }
        }
    }
`;
