import { 
    ADD_TO_DROPDOWN_OPTIONS, 
    CHANGE_GENDERS, 
    DROPDOWN_OPTION_CHOSEN, 
    NAME_CHANGED, 
    REPORT_TEXT_CHANGED 
} from '../actions/actionTypes'

export function options(state = { dropdownOptions: [], name: '' }, action) {
    switch (action.type) {
        case ADD_TO_DROPDOWN_OPTIONS:
            let newState = new Set();

            for (const option of action.data) {
                newState.add(option);
            }

            return Object.assign({}, state, { dropdownOptions: Array.from(newState) });
        case NAME_CHANGED:
            return Object.assign({}, state, { name: action.data });
        default:
            return state;
    }
}

export function reportText(state = { reportText: '', selectedDropdownOptions: {} }, action) {
    switch (action.type) {
        case CHANGE_GENDERS:
            return Object.assign({}, state, { reportText: changeGenders(action.data, state.reportText) });
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

function changeGenders(genderToChangeTo, reportText) {
    let convertedReportText = reportText;

    switch (genderToChangeTo) {
        case 'male':
            console.log('m')
            break;
        case 'female':
            console.log('f')
            break;
        case 'other':
            console.log('o')
            break;
        default:
            break;
    }

    return convertedReportText;
}
