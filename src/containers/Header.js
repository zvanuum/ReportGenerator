import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, Label, OverlayTrigger, PageHeader, Panel, Popover } from 'react-bootstrap';

import { addDropdownOptions } from '../actions/actions';

class Header extends Component {
    render() {
        return (
            <div>
                <PageHeader>Report Generator</PageHeader>
                <div style={{ 'marginLeft': "3%" }}>
                    <Label bsStyle="primary">Dropdown Options</Label>
                    <OverlayTrigger
                        placement="right"
                        overlay={(<Popover>Each line will appear as an option.</Popover>)}
                    >
                        <FormControl
                            componentClass="textarea"
                            style={{
                                'resize': 'none',
                                'width': '20%',
                                'height': '150px'
                            }}
                        />
                    </OverlayTrigger>
                </div>
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
        addToDropdown: (options) => dispatch(addDropdownOptions(['test']))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
