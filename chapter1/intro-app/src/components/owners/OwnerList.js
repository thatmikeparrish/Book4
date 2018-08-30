import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./owners.css"

export default class OwnerList  extends Component {
    render(props) {
        return (
            <div className="owners">
                <h1 className="title">Pet Owners</h1>
                <div className="ownerButton">
                    <button type="button" className="btn btn-success" onClick={() => {this.props.history.push("/owners/new")}}>New Pet Owner</button>
                </div>
                <div className="cardDeck"> 
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img alt={owner.name} src={owner.pic} />
                                    <p>{owner.name}</p>
                                    <p>{owner.phoneNumber}</p>
                                    <Link className="nav-link details" to={`/owners/${owner.id}`}>Details</Link>
                                    <button onClick={() => this.props.delete("owners", owner.id)} className="btn btn-primary card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}