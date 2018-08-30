import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./locations.css"


export default class LocationList  extends Component {
    render(props) {
        return (
            <div className="locations">
                <h1 className="title">Our Locations</h1>
                <div className="locationButton">
                    <button type="button" className="btn btn-success" onClick={() => {this.props.history.push("/locations/new")}}>New Locations</button>
                </div>
                <div className="cardDeck"> 
                {
                    this.props.locations.map(location =>
                        <div key={location.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img alt={location.name} src={location.pic} />
                                    {location.name}<br></br>
                                    {location.address}<br></br>
                                    <Link className="nav-link details" to={`/locations/${location.id}`}>Details</Link>
                                    <button onClick={() => this.props.delete("locations", location.id)} className="btn btn-primary card-link">Delete</button>
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