import { FETCH_DATA } from "../constants"

const initialState = {
    data: []
}

export const dataReducers = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DATA:
            return {...state, data:action.payload}
        default: return state
    }
}