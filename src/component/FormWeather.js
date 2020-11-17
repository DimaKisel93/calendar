import React, { Fragment } from "react";

export default function Form({input, setInput, setUrl}){
 
    return(
        <Fragment>
            <label>Узнать погоду</label>
            <input type="text" name="city" value={input} placeholder="Город" onChange={(e) => {setInput(e.target.value)}} />
            <button type="button" onClick={() => setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=125068128513a6c2a72f650bc8020952&units=metric`)}>Получить погоду</button>
        </Fragment>
    )
}
