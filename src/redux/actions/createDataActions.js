import { HIDE_LOADER, SHOW_LOADER } from "../constants"

export function fetchData(){
    return {
        type: FETCH_DATA
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