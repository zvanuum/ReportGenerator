import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Label, Row } from 'react-bootstrap';

import ReportInputForm from '../components/ReportInputForm';

import { reportTextChanged } from '../actions/actions';

class ReportMenu extends Component {
    handleReportInputChange = (event) => {
        this.props.reportTextChanged(event.target.value);
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
                        <p style={{ 'height': '35em', 'marginBottom': '15px' }}>
                            {this.props.reportText}
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

ReportMenu.propTypes = {
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
