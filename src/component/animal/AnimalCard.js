import React, { Component } from "react"
import { Link } from "react-router-dom"
import animaal from "./animaal.png"
import "./Animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={animaal} alt= "" className="icon--dog" />
                       <h5> {this.props.animal.name} </h5>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</a>
                        <button type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                        }}>
                        Edit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}