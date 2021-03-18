import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { updateGeneralInfoHandler } from '../../ducks/userInfo';
import selector from "./generalInfoPage.selector";

import styles from './generalInfoPage.module.css';

const GeneralInfoPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    let initialData = useSelector(selector);

    const [data, setData] = useState(initialData);

    const onChangeHandler = useMemo(() => (e) => {
        setData(() => ({
            ...data,
            [e.target.id]: e.target.value,
        }))
    }, [data])

    const submitHandler = useMemo(() => (e) => {
        e.preventDefault();

        dispatch(updateGeneralInfoHandler(data));

        history.push('/education-info');

    }, [data, dispatch, history]) ;

    return (
        <form onSubmit={submitHandler} className={styles.generalForm}>
            <label htmlFor="name">Имя</label>
            <input type="text" id='name' required onChange={onChangeHandler} value={data.name} />

            <label htmlFor="surname">Фамилия</label>
            <input type="text" id='surname' required onChange={onChangeHandler} value={data.surname} />

            <label htmlFor="positionName">Должность</label>
            <input type="text" id='positionName' required onChange={onChangeHandler} value={data.positionName} />

            <label htmlFor="phoneNumber">Номер телефона</label>
            <input type="tel" id='phoneNumber' required onChange={onChangeHandler} value={data.phoneNumber} />

            <label htmlFor="email">email</label>
            <input type="email" id='email' required onChange={onChangeHandler} value={data.email} />

            <button type="submit" className={styles.submitGeneralFormButton}>Далее</button>
        </form>
    )
}

export default GeneralInfoPage;