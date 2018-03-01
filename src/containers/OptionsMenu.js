import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DropdownOptionsInputPanel from '../components/DropdownOptionsInputPanel';

import { addDropdownOptions } from '../actions/actions';

class OptionsMenu extends Component {
    handleDropdownOptionsInputChange = (event) => {
        this.props.addToDropdown(event.target.value.split("\n").filter(option => option));
    }

    render() {
        return (
            <DropdownOptionsInputPanel onChange={this.handleDropdownOptionsInputChange}/>
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
