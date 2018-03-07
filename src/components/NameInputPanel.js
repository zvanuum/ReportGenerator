import React from 'react';
import { FormControl, Panel } from 'react-bootstrap';

const NameInputPanel = (props) => {
    return (<Panel bsStyle="warning">
        <Panel.Heading>Name</Panel.Heading>
        <Panel.Body>
                <FormControl
                    onChange={(e) => props.onChange(e)}
                    type="text"
                />
        </Panel.Body>
    </Panel>)
}

export default NameInputPanel;
