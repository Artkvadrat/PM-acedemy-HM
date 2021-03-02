import React from 'react';
import WeatherCard from "./weatherCard";

const WeatherContainer = ({weatherData}) => {
    return <ul>
            {weatherData.map( (item) => <li key={item.id}> {<WeatherCard data={item}/>} </li> )}
        </ul>
}



export default WeatherContainer;
