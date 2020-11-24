import { combineReducers } from 'redux';
import { appReducers } from './appReducers';
import { dataReducers } from './dataReducers';

const rootReducer = combineReducers({
    data: dataReducers,
    app: appReducers
});

export default rootReducer;