import React from "react"
import {ReactComponent as ArrowUp} from '../img/up-arrow-angle_icon-icons.com_73127.svg';
import {ReactComponent as ArrowDown} from '../img/downarrow2_89392.svg';

export default function CalendarHeader({value , setValue , setIsSelected}){

    function currMothName(){
        return value.format("MMMM")
    }

    function currYearName(){
        return value.format("YYYY")
    }

    function handlePrevMoth(){
        return value.clone().subtract(1 , "month")
    }
    
    function handleNextMoth(){
        return value.clone().add(1 , "month")
    }

    return(
        <div className="header">
            <div className="current">
                 <div className="current__title">{currMothName()} {currYearName()}</div>
            </div>
            <div className="buttons">
                <div className="previous" onClick={() =>  setValue(handlePrevMoth()) || setIsSelected(false)}><ArrowUp /></div>  
                <div className="next" onClick={() =>  setValue(handleNextMoth()) || setIsSelected(false)}><ArrowDown /></div> 
            </div>
        </div>
    )
}