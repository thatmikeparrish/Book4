import React, { Component } from 'react'
import "./owners.css"

export default class OwnerList  extends Component {
    render(props) {
        return (
            <div className="owners">
                <h3>Our Owners</h3>
                <div className="cardDeck"> 
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img alt={owner.name} src={owner.pic} />
                                    <p>{owner.name}</p>
                                    <p>{owner.phone}</p>
                                    <a href="#"
                                        onClick={() => this.props.deleteOwner(owner.id)}
                                        className="card-link">Delete</a>
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