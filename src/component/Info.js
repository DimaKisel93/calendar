import React from "react";
import { useSelector } from 'react-redux';

export default function Info(){

    const dataCity = useSelector(state => state.data.ourData)

    return(
     <div>
        <h2>Погода</h2>
        <p>Узнайте погоду в любом городе</p>
        <p>Ваше местоположение</p>
        <p>{dataCity.name}</p>
     </div>
    )
}
