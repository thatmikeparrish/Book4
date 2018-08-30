import React, { Component } from "react"
import './login.css'


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
    }

    render() {
        return (
            <div className="formArea login">
                <form className="loginForm" onSubmit={this.handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal title">Please sign in</h1>
                    <input className="form-group" onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder="Email"
                        required="" autoFocus="" />
                    <input className="form-group" onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <button className="btn btn-primary form-group" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}