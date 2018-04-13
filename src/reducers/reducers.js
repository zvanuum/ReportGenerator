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
    switch (genderToChangeTo) {
        case 'male':
            return convertFemaleToMale(reportText);
        case 'female':
            return convertMaleToFemale(reportText);
        default:
            return reportText;
    }
}

const convertFemaleToMale = (report) => (
    report.replace(/(^|\s)(H|h)ers?(,|\.|;|\s)?/g, '$1$2is$3')
        .replace(/(^|\s)She(,|\.|;|\s)?/g, '$1He$2')
        .replace(/(^|\s)she(,|\.|;|\s)?/g, '$1he$2')
)

const convertMaleToFemale = (report) => (
    report.replace(/(^|\s)He(,|\.|;|\s)?/g, '$1She$2')
        .replace(/(^|\s)he(,|\.|;|\s)?/g, '$1she$2')
        .replace(/(^|\s)(H|h)im(,|\.|;|\s)?/g, '$1$2er$3')
        .replace(/(^|\s)(H|h)is(,|\.|;|\s)?/g, '$1$2ers$3')
)
