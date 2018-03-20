import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Col, Button, Grid, Modal, PageHeader, Row } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import OptionsMenu from './OptionsMenu';
import ReportMenu from './ReportMenu';

class App extends Component {
    state = {
        show: false
    };

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    allDropdownsCompleted = () => {
        const dropdownCount = this.props.reportText.reportText.split('{}').length - 1;
        const selectedDropdownCount = Object.values(this.props.reportText.selectedDropdownOptions).length;

        return dropdownCount === selectedDropdownCount;
    }

    generateReportText = () => {
        let generatedText = this.replaceTemplateWithDropdownOptions(this.props.reportText.reportText, this.props.reportText.selectedDropdownOptions);
        generatedText = this.replaceTemplateWithName(generatedText, this.props.options.name);
        return generatedText;
    }

    replaceTemplateWithDropdownOptions = (reportText, selectedDropdownOptions) => {
        const splitText = reportText.split('{}');
        let generatedText = '';

        for (let i in splitText) {
            generatedText += splitText[i];
            generatedText += selectedDropdownOptions[i] || '';
        }

        return generatedText;
    }

    replaceTemplateWithName = (generatedText, name) => {
        return generatedText.replace(/\[\]/g, name);
    }

    render() {
        const generatedReportText = this.generateReportText();

        return (
            <div>
                <PageHeader style={{
                    'marginTop': 0,
                    'padding': '1px 0 0 3%',
                    'backgroundColor': '#F7C244'
                }}>
                    Report Generator
                </PageHeader>
                <OptionsMenu />
                <hr style={{ 'margin': '0 0 0 0' }} />
                <ReportMenu dropdownOptions={this.props.options.dropdownOptions} name={this.props.options.name} />
                <hr style={{ 'margin': '0 0 0 0' }} />
                <Grid>
                    <Row>
                        <Col xs={4} md={4} />
                        <Col xs={6} md={6}>
                            {
                                !this.allDropdownsCompleted() ?
                                    (<p style={{ 'margin': '20px 0 0 0', 'color': 'red', 'fontSize': '11px' }}>
                                        Please select an option for each dropdown menu before generating a report.
                                    </p>) :
                                    null
                            }
                        </Col>
                        <Col xs={2} md={2}>
                            <Button
                                onClick={this.handleShow}
                                bsStyle="warning"
                                style={{ 'margin': '20px 0 20px 0' }}
                                disabled={!this.allDropdownsCompleted()}
                            >
                                Convert
                            </Button>
                        </Col>
                    </Row>
                </Grid>

                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{generatedReportText}</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleClose()}>Close</Button>
                        <CopyToClipboard text={generatedReportText}>
                            <Button bsStyle="warning">Copy to Clipboard</Button>
                        </CopyToClipboard>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

App.propTypes = {
    options: PropTypes.object
};

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(App); 
