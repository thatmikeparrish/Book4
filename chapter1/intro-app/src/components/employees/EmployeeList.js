import React, { Component } from 'react'
import EmployeeCard from "./EmployeeCard"
import "./employees.css"


export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
                <h1 className="title">Our Employees</h1>
                <div className="employeeButton">
                    <button type="button" className="btn btn-success" onClick={() => {this.props.history.push("/employees/new")}}>New Employee</button>
                </div>
                <div className="cardDeck"> 
                    {
                        this.props.employees.map(employee =>
                            <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                        )
                    }
                </div>
            </div>
        );
    }
}