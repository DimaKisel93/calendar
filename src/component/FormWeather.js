import React, { Fragment } from "react";
import { fetchData } from "../redux/actions/createDataActions";
import { useDispatch } from 'react-redux';

export default function Form({input, setInput}){

    const dispatch = useDispatch();

    return(
        <Fragment>
            <label>Узнать погоду</label>
            <input type="text" name="city" value={input} placeholder="Город" onChange={(e) => {setInput(e.target.value)}} />
            <button type="button" onClick={() => dispatch(fetchData(input))}>Получить погоду</button>
        </Fragment>
    )
}
