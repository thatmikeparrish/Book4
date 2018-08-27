import React, { Component } from 'react'
import "./locations.css"


export default class LocationList  extends Component {
    render(props) {
        return (
            <div className="locations">
                <h3>Our locations</h3>
                <div className="cardDeck"> 
                {
                    this.props.locations.map(location =>
                        <div key={location.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img alt={location.name} src={location.pic} />
                                    {location.name}<br></br>
                                    {location.address}<br></br>
                                    <a href="#"
                                        onClick={() => this.props.deleteLocation(location.id)}
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