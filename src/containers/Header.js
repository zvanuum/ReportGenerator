import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

import DropdownOptionsInputPanel from '../components/DropdownOptionsInputPanel';

import { addDropdownOptions } from '../actions/actions';

class Header extends Component {
    handleDropdownOptionsInputChange = (event) => {
        this.props.addToDropdown(event.target.value.split("\n").filter(option => option));
    }

    render() {
        return (
            <div style={{ 'marginLeft': "3%" }}>
                <PageHeader>Report Generator</PageHeader>
                <DropdownOptionsInputPanel onChange={this.handleDropdownOptionsInputChange}/>
            </div>
        );
    }
}

Header.propTypes = {
    addToDropdown: PropTypes.func,
    dropdownOptions: PropTypes.arrayOf(PropTypes.string)
};

function mapStateToProps(state) {
    const { dropdownOptions } = state;
    console.log(dropdownOptions)
    return {
        dropdownOptions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDropdown: (options) => dispatch(addDropdownOptions(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
