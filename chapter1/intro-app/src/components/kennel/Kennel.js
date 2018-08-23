import React, { Component } from 'react'
import EmployeeList from "../employee/EmployeeList"  // Import EmployeeList component
import App from "../../App"
import LocationList from "../locations/LocationList"


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <App />
                <h3>Student Kennels</h3>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}