import React, { Component } from 'react'
// import { Link } from "react-router-dom"
import AnimalCard from './AnimalCard'
import './animals.css';


export default class AnimalsList extends Component {

    render() {

        return (
            <div className="animals">
                <h1 className="title">Our Animals</h1>
                <div className="animalButton">
                    <button type="button" className="btn btn-success" onClick={() => { this.props.history.push("/animals/new") }}>New Animal</button>
                </div>
                <div className="cardDeck">
                    {
                        this.props.animals.map(animal =>
                            <AnimalCard key={animal.id} animal={animal} {...this.props} />
                        )
                    }
                </div>
            </div>
        );
    }
}