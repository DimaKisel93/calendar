import React, {useState, useEffect} from "react";
import Form from "./FormWeather";
import WeatherInfo from "./WeatherInfo";
import Info from "./Info";
import '../style/Weather.css';
import { fetchData } from "../redux/actions/createDataActions";
import {  useDispatch, useSelector } from 'react-redux';

export default function Weather(){
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.loading)
   
     useEffect(() => {
       dispatch(fetchData(input))
     }, [dispatch])

    if(loading){
      return (
        <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
        </div>
      )
    }
    
    return ( 
      <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="weather">
                <div className="">
                  <Info />
                </div>
                <div className="col-xs-12 col-sm-7 col-md-8 form">
                  <Form  input={input} setInput={setInput} />   
                </div>
              </div>
              <WeatherInfo /> 
            </div>
          </div>  
        </div>
    )
}
