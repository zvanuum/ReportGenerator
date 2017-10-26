import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import DropdownPicker from '../components/DropdownPicker';

class Header extends Component {
    schools = ['Penderghast', 'Sunset Ridge'];
    grades = ['KG', '1', '2', '3', '4', '5', '6', '7', '8'];
    state = {
        selectedSchool: -1,
        selectedGrade: -1
    };

    selectSchool = (selectedSchool) => {
        this.setState({
            selectedSchool
        })
    };

    selectGrade = (selectedGrade) => {
        this.setState({
            selectedGrade
        })
    };

    getSchoolButtonText = () => {
        return `School: ${this.state.selectedSchool === -1 ? 'N/A' : this.schools[this.state.selectedSchool]}`;
    };

    getGradeButtonText = () => {
        return `Grade: ${this.state.selectedGrade === -1 ? 'N/A' : this.grades[this.state.selectedGrade]}`;
    };

    render() {
        const leftMargin = { marginLeft: '5%' };

        return (
            <PageHeader>
                <span style={leftMargin}>{<small>Alexa's Schedule</small>}</span>
                <span style={leftMargin}>
                    <DropdownPicker title={this.getSchoolButtonText()} 
                                    options={this.schools} 
                                    onSelect={this.selectSchool} 
                                    disabled={false}/>
                </span>
                <span style={leftMargin}>
                    <DropdownPicker title={this.getGradeButtonText()}
                                    options={this.grades}
                                    onSelect={this.selectGrade}
                                    disabled={this.state.selectedSchool === -1}/>
                </span>
            </PageHeader>
        );
    }
}

export default Header;
