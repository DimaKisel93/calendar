import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_DATA, REQUEST_TODOS, FETCH_DATA_INPUT} from './constants';
import {hideLoader, showLoader} from './actions/createDataActions';
import axios from 'axios';

export function* sagaWatcher(){
    yield takeEvery(REQUEST_TODOS, sagaWorker)
}

function* sagaWorker(input){
    yield put(showLoader())
    if(input.input !== ""){
        const payloadInput = yield call(fetchInputData, input)
        yield put({type: FETCH_DATA_INPUT , payloadInput})
    }
    const payload = yield call(fetchData)
    yield put({type: FETCH_DATA , payload})
    yield put(hideLoader()) 
}

async function fetchData(){
    try {
        const result = await axios.get(`http://api.ipstack.com/134.17.6.31?access_key=25ddb41452e0bddf93c2b6dd839b0a75&output=json`);
        const ourCity = result.data.city;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ourCity}&appid=125068128513a6c2a72f650bc8020952&units=metric`);
        const dataCity = response.data;
        return dataCity
    } catch (error) {
        error.status = 400;
        console.log("Ошибка")
    } 
}

async function fetchInputData(input){
    debugger;
    try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.input}&appid=125068128513a6c2a72f650bc8020952&units=metric`);
        const dataCity = result.data;
        return dataCity
    } catch (error) {
        error.status = 400;
        console.log("Ошибка")
    }       
}  
