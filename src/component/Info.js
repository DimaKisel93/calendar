import React from "react";

export default function Info({data}){

    return(
     <div>
        <h2>Погода</h2>
        <p>Узнайте погоду в любом городе</p>
        <p>Ваше местоположение</p>
        <p>{data}</p>
     </div>
    )
}
