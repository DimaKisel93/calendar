function ifSelected(day, value, isSelected){
    if(isSelected){
        return value.isSame(day, "day")
    }
}

function isToday(day){
    return day.isSame(new Date(), "day")
}

export default function dayStyles(day, value , isSelected){
    if(ifSelected(day, value, isSelected)) return "selected"
    if(isToday(day)) return "today"
    return "inside__day"
}