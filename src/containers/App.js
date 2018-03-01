import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import OptionsMenu from '../containers/OptionsMenu';

class App extends Component {
    render() {
        return (
            <div>
                <PageHeader style={{
                    'margin-top': 0,
                    'padding': '1px 0 0 3%',
                    'background-color': '#F7C244'
                }}>
                    Report Generator
                </PageHeader>
                <div style={{ 'marginLeft': "3%" }}>
                    <OptionsMenu />
                </div>
                <hr />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>{'Col md={6} mdPush={6}'}</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>{'Col md={6} mdPull={6}'}</code>
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
