import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const DropdownPicker = (props) => {
    const { componentIndex, title, options, onSelect, disabled } = props;

    return <DropdownButton id={`dropdown-basic-${componentIndex}`}
                            title={title}
                            className="dropdown-size-medium"
                            onSelect={(optionIndex) => { onSelect(componentIndex, options[optionIndex]) }}
                            disabled={disabled}
                            bsSize="small">
            {
                options.map((option, i) => {
                    return <MenuItem key={option} eventKey={i}>{option}</MenuItem>
                })
            }
        </DropdownButton>
};

export default DropdownPicker;
