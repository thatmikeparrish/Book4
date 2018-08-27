import React, { Component } from 'react'
import './animals.css';


export default class AnimalsList  extends Component {
    render(props) {
        return (
            <div className="animals">
                <h3>Our Animals</h3>
                <div className="cardDeck"> 
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img alt={animal.name} src={animal.pic} className={animal.type} />
                                    {animal.name}
                                    <a href="#"
                                        onClick={() => this.props.deleteAnimal(animal.id)}
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