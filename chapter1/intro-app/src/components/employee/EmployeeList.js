import React, { Component } from 'react'
import "./employees.css"


export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
                <h3>Our Employees</h3>
                <div className="cardDeck"> 
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img alt={employee.name} src={employee.pic} />
                                    {employee.name}
                                    <button onClick={() => this.props.delete("employees", employee.id)} className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}