import { ADD_TO_DROPDOWN_OPTIONS } from '../actions/actionTypes'

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
