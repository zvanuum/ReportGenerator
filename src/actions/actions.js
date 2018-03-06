import { ADD_TO_DROPDOWN_OPTIONS, DROPDOWN_OPTION_CHOSEN, REPORT_TEXT_CHANGED } from './actionTypes'

export const addDropdownOptions = (options) => {
    return {
        type: ADD_TO_DROPDOWN_OPTIONS,
        data: options
    };
}

export const dropdownOptionChosen = (index, option) => {
    return {
        type: DROPDOWN_OPTION_CHOSEN,
        data: {
            index,
            option
        }
    };
}

export const reportTextChanged = (reportText) => {
    return {
        type: REPORT_TEXT_CHANGED,
        data: reportText
    };
}
