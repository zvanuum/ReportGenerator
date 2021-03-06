import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

import DropdownOptionsInputPanel from '../components/DropdownOptionsInputPanel';
import GenderChangePanel from '../components/GenderChangePanel';
import NameInputPanel from '../components/NameInputPanel';

import { addDropdownOptions, changeGenders, nameChanged } from '../actions/actions';

class OptionsMenu extends Component {
    handleDropdownOptionsInputChange = (event) => {
        this.props.addToDropdown(event.target.value.split("\n").filter(option => option));
    }

    handleNameInputChange = (event) => {
        this.props.nameChanged(event.target.value);
    }

    handleGenderButtonPressed = (genderToSwitchTo) => {
        this.props.changeGenders(genderToSwitchTo);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} md={4} lg={6}>
                        <span>
                            Typing {'{}'} will generate a dropdown menu to choose options from.
                            Typing [] will be replaced by whatever is put in the "Name" field.
                            The gender buttons will switch pronouns with respect to which button was pressed.
                            Once finished editing, pressing the "Convert" button will generate the report in an easily copied or saved format.
                        </span>
                    </Col>
                    <Col xs={4} md={4} lg={3}>
                        <NameInputPanel onChange={this.handleNameInputChange} />
                        <GenderChangePanel onClick={this.handleGenderButtonPressed} />
                    </Col>
                    <Col xs={4} md={4} lg={3}>
                        <DropdownOptionsInputPanel onChange={this.handleDropdownOptionsInputChange} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

OptionsMenu.propTypes = {
    addToDropdown: PropTypes.func,
    dropdownOptions: PropTypes.arrayOf(PropTypes.string),
    nameChanged: PropTypes.func
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    addToDropdown: (options) => dispatch(addDropdownOptions(options)),
    changeGenders: (genderToChangeTo) => dispatch(changeGenders(genderToChangeTo)),
    nameChanged: (name) => dispatch(nameChanged(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsMenu);
