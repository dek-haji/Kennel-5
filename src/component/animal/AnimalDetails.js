import React, { Component } from "react"
import "./Animal.css"
import animaal from "./animaal.png"


export default class Animal extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }

    render() {
        return (
            <section className="animal">
                <div key={ this.props.animal.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ animaal } alt = "" className="icon--dog" />
                            { this.props.animal.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animal.breed }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                        () => this.props.deleteAnimal(this.props.animal.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}