import React, { Component } from "react"
import "./owners.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        name: "",
        phoneNumber: "",
        pic: "",
        notes: ""
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
    constructNewOwner = evt => {
        evt.preventDefault()
        const owner = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            pic: this.state.pic,
            notes: this.state.notes
        }

        // Create the animal and redirect user to animal list
        this.props.add("owners", owner).then(() => this.props.history.push("/owners"))
    }

    render() {
        return (
            <React.Fragment>
                <div className="formArea owners">
                    <form className="ownerForm">
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Owner Name" />
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
                        <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary form-group">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}