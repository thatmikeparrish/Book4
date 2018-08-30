import React, { Component } from "react"
import AnimalCard from "../animals/AnimalCard"
import "./employees.css"

export default class EmployeeDetail extends Component {
    render() {
        
        console.log("props", this.props)
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeID, 0)) || {}
        console.log("employee", employee)
        const matchedLocation = this.props.locations.find(location => location.id === employee.locationId) || {}
        console.log("matchedLocation", matchedLocation)
        // this.props.employees.find(e => e.name === this.state.employee).id

        return (
            <section className="employees">
                <div className="cardDeck">
                    <div key={employee.id} className="card" style={{width: 45 + 'rem'}}>
                        <div className="card-body">
                            <div className="card-title">
                                <img src={employee.pic} alt={employee.name} />
                                <h3>{employee.name}</h3>
                                <h5>{matchedLocation.name}</h5>
                                <h6>{employee.phoneNumber}</h6>
                                <p>{employee.notes}</p>
                                <button onClick={() => this.props.delete(employee.id)} className="btn btn-primary card-link">Delete</button>
                            </div>
                            <div className='card-footer employees'>
                                <h5 className="card-subtitle mb-2">Caretaker For</h5>
                                <div className='employeeCardDeck'>
                                        {
                                            this.props.animals
                                                .filter(cards => cards.employeeId === employee.id)
                                                .map(cards => <AnimalCard key={cards.id} animal={cards} {...this.props} />)
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}