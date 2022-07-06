import styled from 'styled-components';
import { useEmit, useEventrixState } from 'eventrix';
import { InfoEntityResponse, Form } from 'types';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { HOSTPORT } from '../../../config';

export const InfoEditForm = () => {
    const emit = useEmit();
    const [info] = useEventrixState<InfoEntityResponse>('info');
    const [form, setForm] = useState({
        street: info.street,
        number: info.number,
        zipCode: info.zipCode,
        city: info.city,
        phone: info.phone,
        email: info.email,
        monThu: {
            from: info.monThu.from,
            to: info.monThu.to,
        },
        friSat: {
            from: info.friSat.from,
            to: info.friSat.to,
        },
        sun: {
            from: info.sun.from,
            to: info.sun.to,
        },
    });

    const handlerEditForm = async (e: FormEvent) => {
        e.preventDefault();

        if (
            info.street === form.street &&
            info.number === form.number &&
            info.zipCode === form.zipCode &&
            info.city === form.city &&
            info.phone === form.phone &&
            info.email === form.email &&
            info.monThu.from === form.monThu.from &&
            info.monThu.to === form.monThu.to &&
            info.friSat.from === form.friSat.from &&
            info.friSat.to === form.friSat.to &&
            info.sun.from === form.sun.from &&
            info.sun.to === form.sun.to
        ) {
            toast.warning('Please update data');
            return;
        }

        const res = await fetch(`${HOSTPORT}/info/${info.id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                street: form.street,
                number: form.number,
                zipCode: form.zipCode,
                city: form.city,
                phone: form.phone,
                email: form.email,
                monThu: { from: form.monThu.from, to: form.monThu.to },
                friSat: { from: form.friSat.from, to: form.friSat.to },
                sun: { from: form.sun.from, to: form.sun.to },
            }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message);
            return;
        }

        emit('info:update', data.info);
        emit(Form.ADD, false);
        toast.success(data.message);
    };

    return (
        <Container>
            <form onSubmit={handlerEditForm}>
                <div className="info-wrapper">
                    <div className="info-left">
                        <div className="input-box">
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={form.street}
                                onChange={(e) =>
                                    setForm({ ...form, street: e.target.value })
                                }
                            />
                            <label htmlFor="street">Street</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={form.number}
                                onChange={(e) =>
                                    setForm({ ...form, number: e.target.value })
                                }
                            />
                            <label htmlFor="number">Number</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={form.zipCode}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        zipCode: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="zipCode">Zip Code</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={form.city}
                                onChange={(e) =>
                                    setForm({ ...form, city: e.target.value })
                                }
                            />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={(e) =>
                                    setForm({ ...form, phone: e.target.value })
                                }
                            />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="input-box">
                            <input
                                type="time"
                                id="fMT"
                                name="fMT"
                                value={form.monThu.from}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        monThu: {
                                            ...form.monThu,
                                            from: e.target.value,
                                        },
                                    })
                                }
                            />
                            <label htmlFor="fMT">[From] Mon-Thu</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="time"
                                id="tMT"
                                name="tMT"
                                value={form.monThu.to}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        monThu: {
                                            ...form.monThu,
                                            to: e.target.value,
                                        },
                                    })
                                }
                            />
                            <label htmlFor="tMT">[To] Mon-Thu</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="time"
                                id="fFS"
                                name="fFS"
                                value={form.friSat.from}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        friSat: {
                                            ...form.friSat,
                                            from: e.target.value,
                                        },
                                    })
                                }
                            />
                            <label htmlFor="fFS">[From] Fri-Sat</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="time"
                                id="tFS"
                                name="tFS"
                                value={form.friSat.to}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        friSat: {
                                            ...form.friSat,
                                            to: e.target.value,
                                        },
                                    })
                                }
                            />
                            <label htmlFor="tFS">[To] Fri-Sat</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="time"
                                id="fS"
                                name="fS"
                                value={form.sun.from}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        sun: {
                                            ...form.sun,
                                            from: e.target.value,
                                        },
                                    })
                                }
                            />
                            <label htmlFor="fS">[From] Sun</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="time"
                                id="tS"
                                name="tS"
                                value={form.sun.to}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        sun: {
                                            ...form.sun,
                                            to: e.target.value,
                                        },
                                    })
                                }
                            />
                            <label htmlFor="tS">[To] Sun</label>
                        </div>
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

        .info-wrapper {
            display: flex;

            .info-right {
                margin-left: 1rem;
            }
        }

        .button-wrapper {
            display: flex;
            justify-content: center;

            button {
                margin-bottom: 0;
            }
        }

        .input-box {
            input {
                height: 2.5rem;
            }
        }
    }
`;
