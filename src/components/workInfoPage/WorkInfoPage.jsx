import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { updateWorkInfoHandler } from '../../ducks/userInfo';
import selector from "./workInfoPage.selector";

import styles from './workInfoPage.module.css';

const EducationForm = ({ initialValue, id, addData }) => {

    const [data, setData] = useState(initialValue);

    const submitHandler = useMemo(() => (e) => {
        e.preventDefault();

        addData(data, id);
    }, [addData, data, id]);

    const onChangeHandler = useMemo(() => (e) => {
        setData(() => ({
            ...data,
            [e.target.id]: e.target.value,
        }))
    }, [data])

    return (
        <form onSubmit={submitHandler} className={styles.workForm}>
            <label htmlFor="position">Должность</label>
            <input type="text" id='position' value={data.position} required onChange={onChangeHandler}/>

            <label htmlFor="companyName">Название компании</label>
            <input type="text" id='companyName' value={data.companyName} required onChange={onChangeHandler}/>

            <label htmlFor="dateStart">Дата начала работы</label>
            <input type="text" id='dateStart' value={data.dateStart} required onChange={onChangeHandler}/>

            <label htmlFor="dateEnd">Дата окончания работы</label>
            <input type="text" id='dateEnd' value={data.dateEnd} required onChange={onChangeHandler}/>

            <button type='submit' className={styles.submitWorkFormButton}>Добавить</button>
        </form>
    )
}

const EducationInfoPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    let { work, education } = useSelector(selector);

    if (!education) {
        history.push('/education-info');
    }

    const [workArray, setEducationArray] = useState(work);

    const [isValidPage, setIsValidPage] = useState(!!workArray[0].position);

    const setValidPageToTrue = useMemo(() => () => {
        setIsValidPage(true);
    }, []);

    const setValidPageToFalse = useMemo(() => () => {
        setIsValidPage(false);
    }, []);

    const addForm = useMemo(() => () => {
        setValidPageToFalse();
        setEducationArray([...workArray, {position: '', companyName: '', dateStart: '', dateEnd: ''}]);
    }, [workArray, setValidPageToFalse]);

    const addData = useMemo(() => (data, id) => {
        let newData = workArray;
        newData[id] = data;
        setEducationArray(newData);
        dispatch(updateWorkInfoHandler(workArray));

        const checkEveryFormOnValidArray = newData.filter(item => item.name === '');
        if (checkEveryFormOnValidArray.length === 0) {
            setValidPageToTrue();
        } else {
            setValidPageToFalse();
        }

    },[dispatch, workArray, setValidPageToFalse, setValidPageToTrue]);

    const goBack = useMemo(() => () => {
        history.goBack();
    }, [history]);

    const goToNextPage = useMemo(() => () => {
        history.push('/resume');
    }, [history]);

    return (
        <React.Fragment>
            {workArray.map((item, id) => {
                return <EducationForm key={id} initialValue={item} id={id} addData={addData}/>
            }) }
            <div className={styles.workNavigationBlock}>
                <button onClick={addForm} disabled={!isValidPage}>Добавить ещё информацию о работе</button>
                <div>
                    <button onClick={goBack}>Назад</button>
                    <button onClick={goToNextPage} disabled={!isValidPage}>Вперед</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EducationInfoPage;