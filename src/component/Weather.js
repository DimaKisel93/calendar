import React, {useState, useEffect} from "react";
import axios from "axios";
import Form from "./FormWeather";
import WeatherInfo from "./WeatherInfo";
import Info from "./Info";
import '../style/Weather.css';

export default function Weather(){
    const [ourCity, setOurCity] = useState("");
    const [dataCity, setDataCity] = useState({ hits: [] });
    const [input, setInput] = useState("");
    const [url, setUrl] = useState(
      `http://api.ipstack.com/134.17.6.31?access_key=25ddb41452e0bddf93c2b6dd839b0a75&output=json`,
    );
    
    useEffect(() => {
      const fetchOurCity = async () => {
          try {
            const result = await axios.get(url);
            setOurCity(result.data.city);
          } catch (error) {
            error.status = 400;
            console.log("Ошибка")
          }
      };
      fetchOurCity();
    }, [url]);

    useEffect(() => {
        if(input === ourCity){
            const fetchData = async () => {
                try {
                  const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ourCity}&appid=125068128513a6c2a72f650bc8020952&units=metric`);
                  setDataCity(result)
                  
                } catch (error) {
                    error.status = 400;
                    console.log("Ошибка")
                }
            };
            fetchData();
        }else{
            const fetchData = async () => {
                try {
                  const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=125068128513a6c2a72f650bc8020952&units=metric`);
                  setDataCity(result)
                  
                } catch (error) {
                    error.status = 400;
                    console.log("Ошибка")
                }
            };
            fetchData();
        }
      }, []);

    return(
        <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-4 info">
                <Info data={ourCity}/>
              </div>
              <div className="col-xs-12 col-sm-7 col-md-8 form">
                <Form input={input} setInput={setInput}/>  
                <WeatherInfo dataCity={dataCity} />  
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
}