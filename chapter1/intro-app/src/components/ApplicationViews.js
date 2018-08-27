import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./locations/LocationList"
import AnimalList from "./animals/AnimalList"
import OwnerList from "./owners/OwnerList"
// import AnimalManager from "../modules/AnimalManager"
import APIManager from "../modules/APIManager"



class ApplicationViews extends Component {
    
    /* employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Gold Fish" },
        { id: 2, name: "Lab" },
        { id: 3, name: "Parrot" },
        { id: 4, name: "Dog" },
        { id: 5, name: "Cat" },
        { id: 6, name: "Gator" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "123-456-7890" },
        { id: 2, name: "Emma Beaton", phone: "456-789-0123" },
        { id: 3, name: "Dani Adkins", phone: "789-012-3456" },
        { id: 4, name: "Adam Oswalt", phone: "012-345-6789" },
        { id: 5, name: "Fletcher Bangs", phone: "345-678-9012" },
        { id: 6, name: "Angela Lee", phone: "678-901-2345" }
    ]

        state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    } */

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        /* fetch("http://localhost:8088/employees")
            .then(r => r.json())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:8088/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:8088/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState)) */

        /* AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        }) */

        APIManager.getAll().then(resources => {
            this.setState((newState))
        })
    }

    deleteLocation = id => {
        fetch(`http://localhost:8088/locations/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:8088/locations`))
        .then(e => e.json())
        .then(locations => this.setState({
            locations: locations
        }))
    }

    deleteEmployee = id => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:8088/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        }))
    }

    deleteOwner = id => {
        fetch(`http://localhost:8088/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:8088/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" key="locations" render={(props) => {
                    return <LocationList deleteLocation={this.deleteLocation} locations={this.state.locations} />
                }} />
                <Route exact path="/animals" key="animals" render={(props) => {
                    return <AnimalList delete={APIManager.delete} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" key="employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" key="owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }

}



export default ApplicationViews