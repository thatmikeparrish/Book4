import React, { Component } from "react"
import "./locations.css"

export default class LocationForm extends Component {
    // Set initial state
    state = {
        name: "",
        address: "",
        pic: ""
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
    constructNewLocation = evt => {
        evt.preventDefault()
        const location = {
            name: this.state.name,
            address: this.state.address,
            pic: this.state.pic
        }

        // Create the animal and redirect user to animal list
        this.props.add("locations", location).then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
            <React.Fragment>
                <div className="formArea locations">
                    <form className="locationForm">
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Location Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="address" placeholder="address" />
                        </div>
                        <div className="form-group">
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="pic" placeholder="Pic URL" />
                        </div>
                        <button type="submit" onClick={this.constructNewLocation} className="btn btn-primary form-group">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}