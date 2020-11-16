import React from "react";
import dayStyles from './Style';

export default function CalendarTable({value, setValue, isSelected, setIsSelected, calendar}){
    
    const firstDayMonth = value.clone().startOf("month");
    const lastDayMonth = value.clone().endOf("month");

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