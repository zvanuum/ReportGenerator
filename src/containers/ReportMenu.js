import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Label, Row } from 'react-bootstrap';

import DropdownPicker from '../components/DropdownPicker';
import ReportInputForm from '../components/ReportInputForm';

import { dropdownOptionChosen, reportTextChanged } from '../actions/actions';

class ReportMenu extends Component {
    handleReportInputChange = (event) => {
        this.props.reportTextChanged(event.target.value);
    }

    handleDropdownChoiceSelected = (index, option) => {
        this.props.dropdownOptionChosen(index, option);
        // Component isn't re-rendered after dropdown choice is dispatched, so force it to update for dropdown title
        // Should probably figure out how to do this properly
        this.forceUpdate();
    }

    createReportWithDropdowns = (reportText) => {
        const splitText = reportText.split('{}');
        const withDropdowns = [];
        
        for (let i = 0; i < splitText.length; i++) {
            withDropdowns.push(splitText[i]);
            if (i !== splitText.length - 1) {
                withDropdowns.push(
                    <DropdownPicker
                        key={i}
                        componentIndex={i}
                        title={this.props.selectedDropdownOptions[i] || 'Select'}
                        options={this.props.dropdownOptions} 
                        onSelect={this.handleDropdownChoiceSelected}
                    />
                );
            }
        }

        return withDropdowns;
    }

    createReportWithName = (reportChildren, name) => {
        return reportChildren.map(child => {
            if (typeof child === 'string' && name) {
                return child.replace(/\[\]/g, name);
            }
            return child;
        });
    }

    render() {
        let generatedText = this.createReportWithDropdowns(this.props.reportText);
        generatedText = this.createReportWithName(generatedText, this.props.name);

        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={6}>
                        <h4><Label bsStyle="warning">Input</Label></h4>
                        <ReportInputForm value={this.props.reportText} onChange={this.handleReportInputChange} />
                    </Col>
                    <Col xs={6} 
                        md={6} 
                        style={{ 
                            'flex': '1',
                            'borderLeft': 
                            '1px solid #EEEEEE' 
                        }}
                    >
                        <h4><Label bsStyle="warning">Preview</Label></h4>
                        <div style={{ 
                            'height': '28em', 
                            'marginBottom': '15px', 
                            'fontSize': '16px',
                            'whiteSpace': 'pre-wrap',
                            'overflow': 'scroll'
                        }}>
                            { generatedText }
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

ReportMenu.propTypes = {
    dropdownOptionChosen: PropTypes.func,
    dropdownOptions: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    reportText: PropTypes.string,
    reportTextChanged: PropTypes.func,
    selectedDropdownOptions: PropTypes.object
};

function mapStateToProps(state) {
    const { reportText, selectedDropdownOptions } = state.reportText;

    return {
        reportText,
        selectedDropdownOptions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dropdownOptionChosen: (index, choiceText) => dispatch(dropdownOptionChosen(index, choiceText)),
        reportTextChanged: (reportText) => dispatch(reportTextChanged(reportText))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportMenu);
