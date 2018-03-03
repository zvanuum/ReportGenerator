import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Label, Row } from 'react-bootstrap';

import DropdownPicker from '../components/DropdownPicker';
import ReportInputForm from '../components/ReportInputForm';
import ReportFormattingForm from '../components/ReportFormattingForm';

import { reportTextChanged } from '../actions/actions';

class ReportMenu extends Component {
    handleReportInputChange = (event) => {
        this.props.reportTextChanged(event.target.value);
    }

    handleDropdownChoiceSelected = (index, option) => {
        console.log(index, option);
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
                        title={'Select'}
                        options={this.props.dropdownOptions} 
                        onSelect={this.handleDropdownChoiceSelected}
                    />
                );
            }
        }

        return withDropdowns;
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={6}>
                        <h4><Label bsStyle="warning">Input</Label></h4>
                        <ReportInputForm onChange={this.handleReportInputChange} />
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
                        <div style={{ 'height': '35em', 'marginBottom': '15px' }}>
                            { this.createReportWithDropdowns(this.props.reportText) }
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

ReportMenu.propTypes = {
    dropdownOptions: PropTypes.arrayOf(PropTypes.string),
    reportText: PropTypes.string,
    reportTextChanged: PropTypes.func
};

function mapStateToProps(state) {
    const { reportText } = state;

    return {
        reportText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        reportTextChanged: (reportText) => dispatch(reportTextChanged(reportText))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportMenu);
