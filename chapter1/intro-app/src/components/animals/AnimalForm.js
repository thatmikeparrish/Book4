import React, { Component } from "react"
import "./animals.css"

export default class AnimalForm extends Component {
    // Set initial state
    state = {
        name: "",
        type: "",
        breed: "",
        pic: "",
        notes: "",
        employee: ""
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
    constructNewAnimal = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const animal = {
                name: this.state.name,
                type: this.state.type,
                breed: this.state.breed,
                pic: this.state.pic,
                notes: this.state.notes,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }

            // Create the animal and redirect user to animal list
            this.props.add("animals", animal).then(() => this.props.history.push("/animals"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="formArea animals">
                    <form className="animalForm">
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Animal name" />
                        </div>
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="breed" placeholder="Breed" />
                        </div>
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="type" placeholder="Type" />
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
                            <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                                <option value="">Select an employee</option>
                                {
                                    this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                                }
                            </select>
                        </div>
                        <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary form-group">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}