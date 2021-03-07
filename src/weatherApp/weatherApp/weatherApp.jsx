import React from "react";
import data from '../weatherData';
import WeatherItem from "../weatherItem";

import styles from './weatherApp.module.css';

const WeatherApp = () => {
    return <div className={styles.wrapper}>
        <ul>
            {data.map( (item) => <WeatherItem weatherData={item} key={item.id}/> )}
        </ul>
    </div>
}

export default WeatherApp;
