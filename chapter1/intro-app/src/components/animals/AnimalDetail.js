import React, { Component } from "react"
import "./animals.css"

export default class AnimalDetail extends Component {
    state = {
        animal: {},
        edit: false,
    }

    handleEditClicked = () => {
        console.log("edit clicked");
        this.setState({
           edit: true,
        })
    }

    handleFieldChange = (whichOne, evt) => {
        console.log("evt handleFieldChange", whichOne);
        const updateAnimal = this.state.animal;
        const stateToChange = whichOne
        updateAnimal[stateToChange] = evt.target.value
        this.setState({updateAnimal})
    }

    constructNewAnimal = evt => {
        evt.preventDefault()
       
           const animal = {
                name: this.state.animal.name,
                type: this.state.animal.type,
                breed: this.state.animal.breed,
                pic: this.state.animal.pic,
                notes: this.state.animal.notes,
                // employeeId: this.props.employees.find(e => e.name === this.state.employee).id
           }
           

           // Create the animal and redirect user to animal list
           this.props.edit("animals", animal, parseInt(this.props.match.params.animalID, 0));
           this.setState({edit:false});
    }


    componentDidMount = () => {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalID, 0)) || {}

        this.setState({animal})
    }



    render() {
        

        return (
            <section className="animals">
                <div className="cardDeck">
                    <div key={this.state.animal.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={this.state.animal.pic} alt={this.state.animal.name} className={this.state.animal.type} />
                                {
                                    (this.state.edit) ?
                                        <input type="text" required="true" className="form-control" onChange={(evt)=>{this.handleFieldChange("name", evt)}} id="name" value={this.state.animal.name} />
                                    :
                                        <h3>{this.state.animal.name}</h3>
                                }
                                {
                                    (this.state.edit) ?
                                        <input type="text" required="true" className="form-control" onChange={(evt)=>{this.handleFieldChange("type", evt)}} id="type" value={this.state.animal.type} />
                                    :
                                        <h3>{this.state.animal.type}</h3>
                                }
                                {
                                    (this.state.edit) ?
                                        <input type="text" required="true" className="form-control" onChange={(evt)=>{this.handleFieldChange("breed", evt)}} id="breed" value={this.state.animal.breed} />
                                    :
                                        <h5>{this.state.animal.breed}</h5>
                                }
                                {
                                    (this.state.edit) ?
                                        <input type="text" required="true" className="form-control" onChange={(evt)=>{this.handleFieldChange("notes", evt)}} id="notes" value={this.state.animal.notes} />
                                    :
                                        <h6>{this.state.animal.notes}</h6>
                                }
                                {
                                    (this.state.edit) ?
                                    <button onClick={this.constructNewAnimal} className="btn btn-primary card-link">Save Critter</button>
                                    : 
                                    <button onClick={() => this.handleEditClicked()} className="btn btn-primary card-link">Edit Critter</button>
                                }
                                <button onClick={() => this.props.delete(this.state.animal.id).then(() => this.props.history.push("/animals"))} className="btn btn-primary card-link">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}