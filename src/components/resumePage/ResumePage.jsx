import React from 'react';
import { useHistory } from 'react-router-dom';

import store from "../../store/store";

import styles from './resumePage.module.css';
import phoneImg from '../../img/phone-call.png';
import emailImg from '../../img/email.png';

const ResumePage = () => {

    const history = useHistory();

    const data = {...store.getState()};

    if (!data.name || !data.education || !data.work) {
        history.push('/general-info');
    }

    return (
        <div style={{backgroundColor: '#9d9d9d', minHeight: '100vh', paddingTop: '200px'}}>
            <div className={styles.resumeBlock}>
                <div className={styles.nameBlock}>
                    <h1>{data.name} {data.surname}</h1>
                    <p>{data.positionName}</p>
                </div>
                <hr/>
                <div className={styles.educationBlock}>
                    <h2>Education</h2>
                    {data.education && data.education.map((item) => {
                        return (
                            <div className={styles.educationItem}>
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.dateStart}-{item.dateEnd}</p>
                                </div>
                                <div>
                                    <h4>{item.speciality}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <hr/>
                <div className={styles.experienceBlock}>
                    <h2>Experience</h2>
                    {data.work && data.work.map((item) => {
                        return (
                            <div className={styles.workItem}>
                                <div>
                                    <h4>{item.companyName}</h4>
                                    <p>{item.dateStart}-{item.dateEnd === '-' ? 'present' : item.dateEnd}</p>
                                </div>
                                <div>
                                    <h4>{item.position}</h4>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <hr/>
                <div className={styles.contactBlock}>
                    <h2>Contact</h2>
                    <div>
                        <img src={phoneImg} alt="Phone number"/>
                        <p>{data.phoneNumber}</p>
                    </div>
                    <div>
                        <img src={emailImg} alt="Email"/>
                        <p>{data.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ResumePage;