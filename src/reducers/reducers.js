import { ADD_TO_DROPDOWN_OPTIONS, DROPDOWN_OPTION_CHOSEN, REPORT_TEXT_CHANGED } from '../actions/actionTypes'

export function dropdownOptions(state = [], action) {
    switch (action.type) {
        case ADD_TO_DROPDOWN_OPTIONS:
            let newState = new Set();

            for (const option of action.data) {
                newState.add(option);
            }

            return Array.from(newState);
        default:
            return state;
    }
}

export function reportText(state = { reportText: '', selectedDropdownOptions: {} }, action) {
    switch (action.type) {
        case DROPDOWN_OPTION_CHOSEN:
            let newState = Object.assign({}, state);

            newState.selectedDropdownOptions[action.data.index] = action.data.option;

            return newState;
        case REPORT_TEXT_CHANGED:
            return Object.assign({}, state, { reportText: action.data });
        default:
            return state;
    }
}
