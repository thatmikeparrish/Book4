import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"

import Login from './login/Login'

import LocationList from "./locations/LocationList"
import LocationDetail from "./locations/LocationDetail"
import LocationForm from "./locations/LocationForm"

import AnimalList from "./animals/AnimalList"
import AnimalDetail from "./animals/AnimalDetail"
import AnimalForm from "./animals/AnimalForm"

import EmployeeList from "./employees/EmployeeList"
import EmployeeDetail from "./employees/EmployeeDetail"
import EmployeeForm from "./employees/EmployeeForm"

import OwnerList from "./owners/OwnerList"
import OwnerDetail from "./owners/OwnerDetail"
import OwnerForm from "./owners/OwnerForm"
    
import APIManager from "../modules/APIManager"



class ApplicationViews extends Component {
    
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        
        /* for(let key in this.state) {
            APIManager.getAll(key).then(response => this.setState({[key]: response}))
        } */

        let _state = {}
        APIManager.getAll("animals").then(animals => _state.animals = animals)
            .then(() => APIManager.getAll("employees"))
            .then(employees => _state.employees = employees)
            .then(() => APIManager.getAll("locations"))
            .then(locations => _state.locations = locations)
            .then(() => APIManager.getAll("employees"))
            .then(owners => _state.owners = owners)
            .then(() => {
                this.setState(_state)
            })

    }

    delete = (resources, id) => APIManager.delete(resources, id).then(data => {
        // console.log(data)
        this.setState({[resources]: data})
    })//.then(() => console.log(this.state))

    add = (resources, newItem) => APIManager.post(resources, newItem).then(data => {
        this.setState({[resources]: data})
    })

    edit = (resources, updateItem, id) => APIManager.update(resources, updateItem, id).then(data => {
        this.setState({[resources]: data})
    })
    

    render() {
        // console.log("render!")
        return (
            <React.Fragment>


                <Route path="/login" component={Login} />

                <Route exact path="/locations" key="locations" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props} delete={this.delete} locations={this.state.locations} />
                    }else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/locations/:locationID(\d+)" render={(props) => {
                    return <LocationDetail {...props} delete={this.delete} locations={this.state.locations} employees={this.state.employees} />
                }} />
                <Route exact path="/locations/new" render={(props) => {
                    return <LocationForm {...props} add={this.add}/>
                }} />



                <Route exact path="/animals" key="animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} delete={this.delete} animals={this.state.animals} />
                    }else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalID(\d+)" render={(props) => {
                    return <AnimalDetail {...props} delete={this.delete} edit={this.edit} animals={this.state.animals} />
                }} />
                <Route exact path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} add={this.add} employees={this.state.employees} />
                }} />



                <Route exact path="/employees" key="employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} delete={this.delete} employees={this.state.employees} />
                    }else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/:employeeID(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} delete={this.delete} employees={this.state.employees} locations={this.state.locations} animals={this.state.animals} />
                }} />
                <Route exact path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} add={this.add} locations={this.state.locations} />
                }} />



                <Route exact path="/owners" key="owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props} delete={this.delete} owners={this.state.owners} />
                    }else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners/:ownerID(\d+)" render={(props) => {
                    return <OwnerDetail {...props} delete={this.delete} owners={this.state.owners} animals={this.state.animals}/>
                }} />
                <Route exact path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} add={this.add}/>
                }} />
            </React.Fragment>
        )
    }

}



export default ApplicationViews