import React, {useState, useEffect, Fragment} from "react";
import moment from "moment";
import buildCalendar from './BuildCalendar'
import CalendarHeader from './Header'

function Calendar() {
    const [calendar,setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [time, setTime] = useState(new Date);
    
    const firstDayMonth = value.clone().startOf("month");
    const lastDayMonth = value.clone().endOf("month");

    moment.updateLocale('en', {
        months : [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
            "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        week:{dow:1}
    });
    
    function tick(){
        setTime(new Date)
    }
    useEffect(() => {
        setInterval(tick, 1000);
        setCalendar(buildCalendar(value));
    }, [value])


    return (
        <Fragment>
            <div className="time">
                <div className="time__current">
                    {time.toLocaleTimeString()}
                </div>
                <div className="date">
                   {moment().format('DD MMMM YYYY')}
                </div>
            </div>
            <hr className="line"/>
            <div className="calendar">
                <CalendarHeader value={value} setValue={setValue} />
                <body>
                    <div className="days__name">
                        {
                            ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб" , "Вс"].map( (d) => (
                                <div className="day">{d}</div>
                                ) 
                            )
                        }
                    </div>
                    {calendar.map((week) => (
                            <div> 
                            {
                                week.map((day) => (
                                <div className={day >= firstDayMonth && day <= lastDayMonth ? "day" : "outday"}
                                    onClick={() => setValue(day)}
                                >
                                    <div className={value.isSame(day , "day") ? "selected" : ""}>
                                        {day.format("D").toString()}
                                    </div>
                                    
                                </div>
                                ))}
                            </div>
                        ))}
                </body>
            </div>
        </Fragment>    
    );
}


export default Calendar