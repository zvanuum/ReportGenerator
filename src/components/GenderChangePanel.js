import React from 'react';
import { Button, ButtonGroup, Panel } from 'react-bootstrap';

const GenderChangePanel = (props) => {
    return (<Panel bsStyle="warning">
        <Panel.Heading>Gender</Panel.Heading>
        <Panel.Body>
            <ButtonGroup>
                <Button>Male</Button>
                <Button>Female</Button>
                <Button>Other</Button>
            </ButtonGroup>
        </Panel.Body>
    </Panel>)
}

export default GenderChangePanel;



