import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { updateEducationInfoHandler } from '../../ducks/userInfo';
import selector from "./educationInfoPage.selector";

import styles from './educationInfoPage.module.css';

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
        <form onSubmit={submitHandler} className={styles.educationForm}>
            <label htmlFor="name">Название учебного заведения</label>
            <input type="text" id='name' value={data.name} required onChange={onChangeHandler}/>

            <label htmlFor="speciality">Специальность</label>
            <input type="text" id='speciality' value={data.speciality} required onChange={onChangeHandler}/>

            <label htmlFor="dateStart">Год начала обучения</label>
            <input type="text" id='dateStart' value={data.dateStart} required onChange={onChangeHandler}/>

            <label htmlFor="dateEnd">Год окончания обучения</label>
            <input type="text" id='dateEnd' value={data.dateEnd} required onChange={onChangeHandler}/>

            <button type='submit' className={styles.submitEducationFormButton}>Добавить</button>
        </form>
    )
}

const EducationInfoPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    let { education, name } = useSelector(selector);

    if (!name) {
        history.push('/general-info');
    }

    const [educationArray, setEducationArray] = useState(education);

    const [isValidPage, setIsValidPage] = useState(!!educationArray[0].name);

    const setValidPageToTrue = useMemo(() => () => {
        setIsValidPage(true);
    }, []);

    const setValidPageToFalse = useMemo(() => () => {
        setIsValidPage(false);
    }, []);

    const addForm = useMemo(() => () => {
        setValidPageToFalse();
        setEducationArray([...educationArray, {name: '', speciality: '', dateStart: '', dateEnd: '',}]);
    }, [educationArray, setValidPageToFalse]);

    const addData = useMemo(() => (data, id) => {
        let newData = educationArray;
        newData[id] = data;
        setEducationArray(newData);
        dispatch(updateEducationInfoHandler(educationArray));

        const checkEveryFormOnValidArray = newData.filter(item => item.name === '');
        if (checkEveryFormOnValidArray.length === 0) {
            setValidPageToTrue();
        } else {
            setValidPageToFalse();
        }

    },[dispatch, educationArray, setValidPageToFalse, setValidPageToTrue]);

    const goBack = useMemo(() => () => {
        history.goBack();
    }, [history]);

    const goToNextPage = useMemo(() => () => {
        history.push('/work-info');
    }, [history]);

    return (
        <React.Fragment>
            {educationArray.map((item, id) => {
                return <EducationForm key={id} initialValue={item} id={id} addData={addData}/>
            }) }
            <div className={styles.educationNavigationBlock}>
                <button onClick={addForm} disabled={!isValidPage}>Добавить ещё учебное заведение</button>
                <div>
                    <button onClick={goBack}>Назад</button>
                    <button onClick={goToNextPage} disabled={!isValidPage}>Вперед</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EducationInfoPage;