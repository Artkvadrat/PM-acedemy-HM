import React from "react";
import WeatherCard from "./weatherCard/weatherCard";

const WeatherItem = ({weatherData}) => {

    const { date,
        minTemp,
        maxTemp,
        pressure,
        humidity,
        windSpeed,
        windDirection,
        generalDescription } = weatherData;

    return <li>
        <WeatherCard date={date}
                     minTemp={minTemp}
                     maxTemp={maxTemp}
                     pressure={pressure}
                     humidity={humidity}
                     windSpeed={windSpeed}
                     windDirection={windDirection}
                     generalDescription={generalDescription}/>
    </li>
}

export default WeatherItem;
