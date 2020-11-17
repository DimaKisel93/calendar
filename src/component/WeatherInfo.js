import React, { Fragment } from "react";

export default function WeatherInfo({dataCity, inputCity, error}){
    console.log(dataCity)
    console.log(inputCity)
    
    return(
        <Fragment>
            {(inputCity.length) === 0 ?
                (
                    (dataCity.length !== 0) ?
                        (
                            <div className="info__Weather">
                            <p>Местоположение: {dataCity.data.name}</p> 
                            <p>Температура: {dataCity.data.main.temp}&deg;</p> 
                            <p>Влажность: {dataCity.data.main.humidity}%</p> 
                        </div>
                        ) :
                        (
                            <div>Закгрузка данных</div>
                        ) 
                ) :
                ( 
                <div className="info__Weather">
                    <p>Местоположение: {inputCity.data.name}</p> 
                    <p>Температура: {inputCity.data.main.temp}&deg;</p> 
                    <p>Влажность: {inputCity.data.main.humidity}%</p> 
                </div>) 
            }
        </Fragment>
    )
}
