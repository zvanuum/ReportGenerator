import { ADD_TO_DROPDOWN_OPTIONS, REPORT_TEXT_CHANGED } from './actionTypes'

export const addDropdownOptions = (options) => {
    return {
        type: ADD_TO_DROPDOWN_OPTIONS,
        data: options
    };
}

export const reportTextChanged = (reportText) => {
    return {
        type: REPORT_TEXT_CHANGED,
        data: reportText
    };
}
