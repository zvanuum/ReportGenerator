import { ADD_TO_DROPDOWN_OPTIONS } from './actionTypes'

export function addDropdownOptions(options) {
    return {
        type: ADD_TO_DROPDOWN_OPTIONS,
        data: options
    };
}
