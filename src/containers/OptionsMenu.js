import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

import DropdownOptionsInputPanel from '../components/DropdownOptionsInputPanel';
import GenderChangePanel from '../components/GenderChangePanel';
import NameInputPanel from '../components/NameInputPanel';

import { addDropdownOptions } from '../actions/actions';

class OptionsMenu extends Component {
    handleDropdownOptionsInputChange = (event) => {
        this.props.addToDropdown(event.target.value.split("\n").filter(option => option));
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} md={4} lg={3}>
                        <NameInputPanel />
                        <GenderChangePanel />
                    </Col>
                    <Col xs={4} md={4} lg={3}>
                        <DropdownOptionsInputPanel onChange={this.handleDropdownOptionsInputChange}/>
                    </Col>
                    <Col xs={4} md={4} lg={6} />
                </Row>
            </Grid>
        );
    }
}

OptionsMenu.propTypes = {
    addToDropdown: PropTypes.func,
    dropdownOptions: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = (state) => ({ ...state });

function mapDispatchToProps(dispatch) {
    return {
        addToDropdown: (options) => dispatch(addDropdownOptions(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsMenu);
