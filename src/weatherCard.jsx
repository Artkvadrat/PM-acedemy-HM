import React from 'react';
import parseDate from "./utils/parseDate.js";
import parseWindDirection from "./utils/parseWindDirection";
import parseGeneralDescription from "./utils/parseGeneralDescription";

import celsiusImg from './img/celsius.png';
import humidityImg from './img/humidity.png';
import windImg from './img/wind.png';
import pressureImg from './img/atmospheric.png';

import styles from './weatherCard.module.css';

const WeatherCard = ({date, minTemp, maxTemp, pressure, humidity, windSpeed, windDirection, generalDescription }) => {

    const parsedDate = parseDate(new Date(date));
    const parsedWind = parseWindDirection(windDirection);
    const weatherImg = parseGeneralDescription(generalDescription);

    return <React.Fragment>
        <p>{parsedDate}</p>
        <hr/>
        <p><img src={weatherImg.src} alt={generalDescription}/></p>
        <p>{generalDescription}</p>
        <hr/>
        <div className={styles.temperature}>
            <p><img src={celsiusImg} alt="Celsius"/></p>
            <p>{minTemp}°C/{maxTemp}°C</p>
        </div>
        <hr/>
        <div className={styles.humidity}>
            <p><img src={humidityImg} alt="Humidity"/></p>
            <p>{humidity}%</p>
        </div>
        <hr/>
        <div className={styles.wind}>
            <p><img src={windImg} alt="Wind"/></p>
            <p><img src={parsedWind.src} alt={parsedWind.title}/>{windSpeed} m/s</p>
        </div>
        <hr/>
        <div className={styles.pressure}>
            <p><img src={pressureImg} alt="Wind"/></p>
            <p>{pressure} mm</p>
        </div>
    </React.Fragment>
}

export default WeatherCard;
