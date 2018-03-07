import { combineReducers } from 'redux';
import { options, reportText } from './reducers';

const rootReducer = combineReducers({
    options,
    reportText
});

export default rootReducer;
