import React from 'react';
import { Button, ButtonGroup, Panel } from 'react-bootstrap';

const GenderChangePanel = (props) => {
    return (<Panel bsStyle="warning">
        <Panel.Heading>Gender</Panel.Heading>
        <Panel.Body>
            <ButtonGroup>
                <Button onClick={() => props.onClick('male')}>Male</Button>
                <Button onClick={() => props.onClick('female')}>Female</Button>
                <Button onClick={() => props.onClick('other')}>Other</Button>
            </ButtonGroup>
        </Panel.Body>
    </Panel>)
}

export default GenderChangePanel;



