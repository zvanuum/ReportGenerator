import { 
    ADD_TO_DROPDOWN_OPTIONS, 
    CHANGE_GENDERS, 
    DROPDOWN_OPTION_CHOSEN, 
    NAME_CHANGED, 
    REPORT_TEXT_CHANGED 
} from './actionTypes';

export const addDropdownOptions = (options) => ({
    type: ADD_TO_DROPDOWN_OPTIONS,
    data: options
});

export const changeGenders = (gender) => ({
    type: CHANGE_GENDERS,
    data: gender
});

export const dropdownOptionChosen = (index, option) => ({
    type: DROPDOWN_OPTION_CHOSEN,
    data: {
        index,
        option
    }
});

export const nameChanged = (name) => ({
    type: NAME_CHANGED,
    data: name
});

export const reportTextChanged = (reportText) => ({
    type: REPORT_TEXT_CHANGED,
    data: reportText
});
