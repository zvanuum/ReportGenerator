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
                <hr style={{ 'margin': "0 0 0 0" }} />
                <ReportMenu />
                <hr style={{ 'marginTop': "0" }} />
                <Grid>
                    <Row>
                        <Col xs={10} md={10} />
                        <Col xs={2} md={2} >
                            <Button bsStyle="warning" style={{'float': 'right'}}>Convert</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

App.propTypes = {
    dropdownOptions: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(App); 
