import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./locations/LocationList"
import AnimalList from "./animals/AnimalList"
import OwnerList from "./owners/OwnerList"
import APIManager from "../modules/APIManager"



class ApplicationViews extends Component {
    
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        
        for(let key in this.state) {
            APIManager.getAll(key).then(response => this.setState({[key]: response}))
        }

    }

    delete = (resources, id) => APIManager.delete(resources, id).then(data => {
        // console.log(data)
        this.setState({[resources]: data})
    })//.then(() => console.log(this.state))

    

    render() {
        // console.log("render!")
        return (
            <React.Fragment>
                <Route exact path="/locations" key="locations" render={(props) => {
                    return <LocationList delete={this.delete} locations={this.state.locations} />
                }} />
                <Route exact path="/animals" key="animals" render={(props) => {
                    return <AnimalList delete={this.delete} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" key="employees" render={(props) => {
                    return <EmployeeList delete={this.delete} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" key="owners" render={(props) => {
                    return <OwnerList delete={this.delete} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }

}



export default ApplicationViews