import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./animals.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={this.props.animal.pic} alt={this.props.animal.name} className={this.props.animal.type} />
                        {this.props.animal.name}
                        <Link className="nav-link details" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <button onClick={() => this.props.delete("animals", this.props.animal.id)} className="btn btn-primary card-link">Discharge</button>
                    </h5>
                </div>
            </div>
        )
    }
}