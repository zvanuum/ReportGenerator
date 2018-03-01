import { ADD_TO_DROPDOWN_OPTIONS } from '../actions/actionTypes'

export function dropdownOptions(state = [], action) {
    switch (action.type) {
        case ADD_TO_DROPDOWN_OPTIONS:
            return action.data;
        default:
            return state;
    }
}
