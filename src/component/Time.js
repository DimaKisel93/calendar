import React, {useState, useEffect} from "react";

import moment from "moment";

export default function Time(){
    const [time, setTime] = useState(new Date);

    useEffect(() => {
        function tick(){
            setTime(new Date())
        }
        setInterval(tick, 1000);
    })

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
