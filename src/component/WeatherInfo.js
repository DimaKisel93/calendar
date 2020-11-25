import { Fragment } from "react";
import { useSelector } from 'react-redux';

export default function WeatherInfo(){

    const dataCity = useSelector(state => state.data.ourData)
    const dataCityInput = useSelector(state => state.data.inputData)

    return(
        <Fragment>
            {(dataCityInput.length) === 0 ?
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
                            <div>Закгрузка данных</div>
                        ) 
                ) :
                ( 
                <div className="info__Weather">
                    <p>Местоположение: {dataCityInput.name}</p> 
                    <p>Температура: {dataCityInput.main.temp}&deg;</p> 
                    <p>Влажность: {dataCityInput.main.humidity}%</p> 
                </div>) 
                
            }
        </Fragment>
    )
}
