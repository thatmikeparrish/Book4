/* import React, { Component } from 'react'
import EmployeeList from "../employee/EmployeeList"  // Import EmployeeList component
import LocationList from "../locations/LocationList"
import App from "../../App"


export default class Kennel extends Component {
    render() {
        return (
            <div>
            <App />
            <h3>Student Kennels</h3>
            <LocationList />
            <EmployeeList />
            </div>
        );
    }
} */

import React, { Component } from "react"
import EmployeeList from "../employee/EmployeeList"
import LocationList from "../locations/LocationList"
import AnimalList from "../animals/AnimalList"
import OwnerList from "../owners/OwnerList"
import "./Kennel.css"


class Kennel extends Component {
    
    employeesFromAPI = [
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
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    intersectionFromAPI = [
        { id: 1, ownerID: 1, animalID: 2 },
        { id: 2, ownerID: 1, animalID: 5 },
        { id: 3, ownerID: 2, animalID: 4 },
        { id: 4, ownerID: 2, animalID: 2 }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI,
        intersection: this.intersectionFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
                <OwnerList owners={this.state.owners} animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel