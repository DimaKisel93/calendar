import { HIDE_LOADER, SHOW_LOADER, FETCH_DATA, REQUEST_TODOS } from "../constants"

export function fetchData(input){
    return {
        type: REQUEST_TODOS,
        input: input
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}