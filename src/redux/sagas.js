import {takeEvery, put} from 'redux-saga/effects';
import {FETCH_DATA} from './constants';
import {showLoader} from './actions/createDataActions';

export function* sagaWatcher(){
    yield takeEvery(FETCH_DATA, sagaWorker)
}

function* sagaWorker(){
    yield put(showLoader())
}