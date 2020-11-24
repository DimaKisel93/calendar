import React, {useState, useEffect} from "react";
import axios from "axios";
import Form from "./FormWeather";
import WeatherInfo from "./WeatherInfo";
import Info from "./Info";
import '../style/Weather.css';

export default function Weather(){
    const [ourCity, setOurCity] = useState("");
    const [dataCity, setDataCity] = useState([]);
    const [inputCity, setInputCity] = useState([]);
    const [input, setInput] = useState("");
    // const [search, setSearch] = useState('');
    // const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState(
      `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=125068128513a6c2a72f650bc8020952&units=metric`,
    );
   
    useEffect(() => {
      const fetchOurCity = async () => {
          // setIsError(false)
          try {
            const result = await axios.get(`http://api.ipstack.com/134.17.6.31?access_key=25ddb41452e0bddf93c2b6dd839b0a75&output=json`);
            setOurCity(result.data.city)
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ourCity}&appid=125068128513a6c2a72f650bc8020952&units=metric`);
            setDataCity(data)
          } catch (error) {
            // setIsError(true)
          }
      };
      fetchOurCity();
      if(input){
        const fetchData = async () => {
          // setIsError(false)
          try {
            const result = await axios.get(url);
            setInputCity(result)
          } catch (error) {
              error.status = 400;
              console.log("Ошибка")
          }
        };
        fetchData();
      }
    }, [ourCity,input, url]);

    return(
        <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="weather">
              <div className="">
                <Info data={ourCity}/>
              </div>
              <div className="col-xs-12 col-sm-7 col-md-8 form">
                <Form input={input} setInput={setInput} setDataCity={setDataCity}  setUrl={setUrl}/>   
              </div>
            </div>
            <WeatherInfo dataCity={dataCity} inputCity={inputCity}/> 
          </div>
        </div>  
      </div>
    )
}