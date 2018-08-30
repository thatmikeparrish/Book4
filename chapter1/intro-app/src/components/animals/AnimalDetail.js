import React, { Component } from "react"
import "./animals.css"

export default class AnimalDetail extends Component {
    render(props) {
        
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalID, 0)) || {}

        return (
            <section className="animals">
                <div className="cardDeck">
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={animal.pic} alt={animal.name} className={animal.type} />
                                {animal.name}
                            </h4>
                            <h6 className="card-title">{animal.breed}</h6>
                            <p>{animal.notes}</p>
                            <button onClick={() => this.props.delete(animal.id)} className="card-link">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}