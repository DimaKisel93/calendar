import React, {useState, useEffect, Fragment} from "react";
import moment from "moment";
import CalendarHeader from './Header'
import CalendarTable from "./CalendarTable";
import Weather from "./Weather";
import Schedule from "./Schedule";
import Chart from "./Chart";
import Time from "./Time";
import buildCalendar from "./BuildCalendar";


function Calendar() {
    const [calendar,setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [isSelected, setIsSelected] = useState(false);
    const [time, setTime] = useState(new Date);
    
   

    useEffect(() => {
        function tick(){
            setTime(new Date())
        }
        setInterval(tick, 1000);
        setCalendar(buildCalendar(value));
    }, [value])

    moment.updateLocale('en', {
        months : [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
            "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        week:{dow:1}
    });

    return (
        <Fragment>
            <Time time={time} />
            <hr className="line"/>
            <div className="container">
                <div className="calendar">
                    <CalendarHeader value={value} setValue={setValue} setIsSelected={setIsSelected} />
                    <CalendarTable value={value} setValue={setValue} calendar={calendar} setCalendar={setCalendar} isSelected={isSelected} setIsSelected={setIsSelected} />
                </div>
                <Weather />
            </div>
            <Schedule />
            {/* <Chart /> */}
           
          
        </Fragment>    
    );
}


export default Calendar