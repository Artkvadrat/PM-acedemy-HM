import React from "react";
import data from './weatherData';
import styles from './App.module.css';
import WeatherContainer from "./weatherContainer";

const App = () => {
    return <div className={styles.wrapper}>
        <WeatherContainer weatherData={data} />
    </div>
}

export default App;
