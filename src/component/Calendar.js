import React, {useState, Fragment} from "react";
import moment from "moment";
import CalendarHeader from './Header'
import CalendarTable from "./CalendarTable";
import Weather from "./Weather";
import Chart from "./Chart";
import Time from "./Time";


function Calendar() {
    const [value, setValue] = useState(moment());
    const [isSelected, setIsSelected] = useState(false);
    
    // Single Responsibility Principle 
    // const [calendar,setCalendar] = useState([]);
    // const [time, setTime] = useState(new Date);
    
    // useEffect(() => {

    //     function tick(){
    //         setTime(new Date())
    //     }
    //     setInterval(tick, 1000);
    //     setCalendar(buildCalendar(value));
    // }, [value])

    moment.updateLocale('en', {
        months : [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
            "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        week:{dow:1}
    });

    return (
        <Fragment>
            <Time />
            <hr className="line"/>
            <div className="container">
                <div className="calendar">
                    {/* Interface Segregation principle (Передаю только нужные props)*/}
                    <CalendarHeader value={value} setValue={setValue} setIsSelected={setIsSelected} />
                    <CalendarTable value={value} setValue={setValue} isSelected={isSelected} setIsSelected={setIsSelected} />
                </div>
                <Weather />
            </div>
            <Chart />
        </Fragment>    
    );
}

export default Calendar