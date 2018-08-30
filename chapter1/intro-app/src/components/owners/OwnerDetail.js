import React, { Component } from "react"
import AnimalCard from "../animals/AnimalCard"
import "./owners.css"

export default class OwnerDetail extends Component {
    render() {
        
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerID, 0)) || {}

        return (
            <section className="owners">
                <div className="cardDeck">
                    <div key={owner.id} className="card" style={{width: 45 + 'rem'}}>
                        <div className="card-body">
                            <div className="card-title">
                                <img src={owner.pic} alt={owner.name} />
                                <h3>{owner.name}</h3>
                                <h6>{owner.phoneNumber}</h6>
                                <p>{owner.notes}</p>
                                <button onClick={() => this.props.delete(owner.id)} className="card-link">Delete</button>
                            </div>
                            <div className='card-footer owners'>
                                <h5 className="card-subtitle mb-2">This person owns these animals</h5>
                                <div className='employeeCardDeck'>
                                        {
                                            this.props.animals
                                                .filter(cards => cards.ownerId === owner.id)
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