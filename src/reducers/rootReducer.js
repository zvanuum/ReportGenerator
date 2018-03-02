import { combineReducers } from 'redux';
import { dropdownOptions, reportText } from './reducers';

const rootReducer = combineReducers({
    dropdownOptions,
    reportText
});

export default rootReducer;
