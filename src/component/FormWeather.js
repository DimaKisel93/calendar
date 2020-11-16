import React, {useState, useEffect} from "react";

export default function Form({setInput}){

    return(
        <form >
            <label>Узнать погоду</label>
            <input type="text" name="city" placeholder="Город" />
            <button>Получить погоду</button>
        </form>
    )
}
