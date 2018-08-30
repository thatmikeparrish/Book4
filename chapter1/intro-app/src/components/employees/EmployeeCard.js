import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./employees.css"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={this.props.employee.pic} alt={this.props.employee.name} />
                        {this.props.employee.name}
                        <Link className="nav-link details" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <button onClick={() => this.props.delete("employees", this.props.employee.id)} className="btn btn-primary card-link">Discharge</button>
                    </h5>
                </div>
            </div>
        )
    }
}