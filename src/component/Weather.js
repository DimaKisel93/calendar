import React from "react";
import Form from "./FormWeather";
import WeatherInfo from "./WeatherInfo";
import Info from "./Info";
import '../style/Weather.css';
import { useSelector } from 'react-redux';

export default function Weather(){
    
    const dataCity = useSelector(state => state.data.ourData)
    const dataCityInput = useSelector(state => state.data.inputData)

    //Single Responsibility Principle

    // const [input, setInput] = useState("");
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //   dispatch(fetchData(input))
    // }, [dispatch])

    return ( 
      <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="weather">
                <div className="">
                  <Info />
                </div>
                <div className="col-xs-12 col-sm-7 col-md-8 form">
                  {/* Single Responsibility Principle */}
                  {/* <Form  input={input} setInput={setInput}/>    */}
                  <Form />   
                </div>
              </div>
              <WeatherInfo>
                   {/* Open Close Principle */}
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
              }
              </WeatherInfo> 
            </div>
          </div>  
        </div>
    )
}
