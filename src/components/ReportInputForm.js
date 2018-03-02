import React from 'react';
import { FormControl } from 'react-bootstrap';

const ReportInputForm = (props) => (
    <FormControl
        onChange={(e) => props.onChange(e)}
        componentClass="textarea"
        placeholder="Input report here"
        style={{
            'resize': 'none',
            'height': '35em',
            'marginBottom': '15px'
        }}
    />
)

export default ReportInputForm;
