import React from "react";

export default function WeatherInfo({dataCity}){
    return(
        <div>
            {dataCity.main &&
            <div className="info__Weather">
                <p>Местоположение: {dataCity.data.name}</p> 
                <p>Температура: {dataCity.data.main.temp}&deg;</p> 
                <p>Влажность: {dataCity.data.main.humidity}%</p> 
            </div>
            }
            <p className="error"> {dataCity.error}</p>
         </div>
    )
}
