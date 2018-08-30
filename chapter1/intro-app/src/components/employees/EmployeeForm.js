import React, { Component } from "react"
import "./employees.css"

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: "",
        phoneNumber: "",
        pic: "",
        notes: "",
        location: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployee = evt => {
        evt.preventDefault()
        if (this.state.location === "") {
            window.alert("Please select a location")
        } else {
            const employee = {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
                pic: this.state.pic,
                notes: this.state.notes,
                locationId: this.props.locations.find(e => e.name === this.state.location).id
            }

            // Create the animal and redirect user to animal list
            this.props.add("employees", employee).then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="formArea employees">
                    <form className="employeeForm">
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Employee Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="phoneNumber" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="pic" placeholder="Pic URL" />
                        </div>
                        <div className="form-group">
                            <textarea type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="notes" placeholder="notes" />
                        </div>
                        <div className="form-group">
                            <select defaultValue="" name="location" id="location"
                                onChange={this.handleFieldChange}>
                                <option value="">Select a location</option>
                                {
                                    this.props.locations.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                                }
                            </select>
                        </div>
                        <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary form-group">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}