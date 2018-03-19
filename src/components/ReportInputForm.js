import React from 'react';
import { FormControl } from 'react-bootstrap';

const ReportInputForm = (props) => (
    <FormControl
        value={props.value}
        onChange={(e) => props.onChange(e)}
        componentClass="textarea"
        placeholder="Input report here"
        style={{
            'resize': 'none',
            'height': '32em',
            'marginBottom': '15px',
            'whiteSpace': 'pre-wrap'
        }}
    />
)

export default ReportInputForm;
