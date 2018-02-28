import { ADD_TO_DROPDOWN_OPTIONS } from '../actions/actionTypes'

export function dropdownOptions(state = [], action) {
    let newState = new Set(state);

    switch (action.type) {
        case ADD_TO_DROPDOWN_OPTIONS:
            for (let option of action.data) {
                newState.add(option);
            }

            return Array.from(newState);
        default:
            return state;
    }
}
