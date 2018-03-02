import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

import DropdownOptionsInputPanel from '../components/DropdownOptionsInputPanel';

import { addDropdownOptions } from '../actions/actions';

class OptionsMenu extends Component {
    handleDropdownOptionsInputChange = (event) => {
        this.props.addToDropdown(event.target.value.split("\n").filter(option => option));
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} md={4}>
                        <DropdownOptionsInputPanel onChange={this.handleDropdownOptionsInputChange}/>
                    </Col>
                    <Col xs={8} md={8} />
                </Row>
            </Grid>
        );
    }
}

OptionsMenu.propTypes = {
    addToDropdown: PropTypes.func,
    dropdownOptions: PropTypes.arrayOf(PropTypes.string)
};

function mapStateToProps(state) {
    const { dropdownOptions } = state;

    return {
        dropdownOptions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDropdown: (options) => dispatch(addDropdownOptions(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsMenu);
