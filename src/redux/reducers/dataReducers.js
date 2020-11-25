import { FETCH_DATA,FETCH_DATA_INPUT, REQUEST_TODOS } from "../constants"

const initialState = {
    ourData: [],
    inputData:[]
}

export const dataReducers = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DATA:
            return {...state, ourData:action.payload}
        case FETCH_DATA_INPUT:
            return {...state, inputData:action.payloadInput}
        default: return state
    }
}