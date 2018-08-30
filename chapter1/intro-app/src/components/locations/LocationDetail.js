import React, { Component } from "react"
import EmployeeCard from "../employees/EmployeeCard"
import "./locations.css"

export default class LocationDetail extends Component {
    render() {
        
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationID, 0)) || {}

        return (
            <section className="locations">
                <div className="cardDeck">
                    <div key={location.id} className="card" style={{width: 45 + 'rem'}}>
                        <div className="card-body">
                            <div className="card-title">
                                <img src={location.pic} alt={location.name} />
                                <h3>{location.name}</h3>
                                <h5>{location.address}</h5>
                                <button onClick={() => this.props.delete(location.id)} className="btn btn-primary card-link">Delete</button>
                            </div>
                            <div className='card-footer locations'>
                                <h5 className="card-subtitle mb-2">Employees at this location</h5>
                                <div className='locationCardDeck'>
                                        {
                                            this.props.employees
                                                .filter(cards => cards.locationId === location.id)
                                                .map(cards => <EmployeeCard key={cards.id} employee={cards} {...this.props} />)
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