import { Fragment } from "react";

export default function WeatherInfo(props){

    return(
        <Fragment>
            {/* Open Close Principle */}
            <div>
                <h4>Данные по погоде</h4>
                {props.children}
            </div>
           
            {/* {(dataCityInput.length) === 0 ?
                (
                    (dataCity.length !== 0) ?
                        (
                            <div className="info__Weather">
                            <p>Местоположение: {dataCity.name}</p> 
                            <p>Температура: {dataCity.main.temp}&deg;</p> 
                            <p>Влажность: {dataCity.main.humidity}%</p> 
                        </div>
                        ) :
                        (
                            <div>Загрузка данных</div>
                        ) 
                ) :
                ( 
                <div className="info__Weather">
                    <p>Местоположение: {dataCityInput.name}</p> 
                    <p>Температура: {dataCityInput.main.temp}&deg;</p> 
                    <p>Влажность: {dataCityInput.main.humidity}%</p> 
                </div>
                ) 
            } */}
           
        </Fragment>
    )
}
