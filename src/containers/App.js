import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Col, Button, Grid, PageHeader, Row } from 'react-bootstrap';

import OptionsMenu from './OptionsMenu';
import ReportMenu from './ReportMenu';

class App extends Component {
    render() {
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
                        <Col xs={10} md={10} />
                        <Col xs={2} md={2} >
                            <Button bsStyle="warning" style={{'float': 'right', 'margin': '20px 0 20px 0'}}>Convert</Button>
                        </Col>
                    </Row>
                </Grid>
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
