import React, {useEffect} from "react";
import moment from "moment";

export default function Time({time}){
    return(
        <div className="time">
        <div className="time__current">
            {time.toLocaleTimeString()}
        </div>
        <div className="date">
           {moment().format('DD MMMM YYYY')}
        </div>
    </div>
    )

}
