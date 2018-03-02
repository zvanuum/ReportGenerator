import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const DropdownPicker = (props) => {
    const { title, options, onSelect, disabled } = props;

    return <DropdownButton title={title} 
                            id="dropdown-size-medium"
                            onSelect={onSelect}
                            disabled={disabled}>
            {
                options.map((option, i) => {
                    return <MenuItem key={option} eventKey={i}>{option}</MenuItem>
                })
            }
        </DropdownButton>
};

export default DropdownPicker;
