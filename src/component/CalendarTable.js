import React, {useState, useEffect} from "react";
import dayStyles from './Style';
import buildCalendar from "./BuildCalendar";

export default function CalendarTable({value, setValue, isSelected, setIsSelected}){
    const [calendar,setCalendar] = useState([]);
    
    const firstDayMonth = value.clone().startOf("month");
    const lastDayMonth = value.clone().endOf("month");

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])

    return(
        <table>
            <tbody>
                <tr>
                    {
                        ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб" , "Вс"].map( (d) => (
                            <td valign="center" align="center" key={d} className="day">{d}</td>
                            ) 
                        )
                    }
                </tr>
                {calendar.map((week) => (
                        <tr key={week}> 
                        {
                            week.map((day) => (
                            <td valign="center" align="center" key={day} className={day >= firstDayMonth && day <= lastDayMonth ? "day" : "outMonthDay"}
                                onClick={() => setIsSelected(true) || setValue(day) }
                            >
                                <div className={dayStyles(day, value, isSelected)}>
                                    <p className="number">{day.format("D").toString()}</p>
                                </div>                                    
                            </td>
                            ))}
                        </tr>
                    ))}
            </tbody>    
        </table>
    )
    
}