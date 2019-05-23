import React, { Component } from 'react';
import { Link } from "react-router-dom";
import animaal from "./animaal.png"
import "./Animal.css"

class AnimalList extends Component {
    handleClick = (event)=> {
        console.log("its working", this.props.animals.id)
        console.log(event)
        this.props.deleteAnimal(this.props.animals.id)
    }
    render() {
        console.log('this is the props in animal List',this.props)
        return (
            <>
                 <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
            <section className="animals">
                    <h1>Animals</h1>
                {
                    this.props.animals.map(animal =>
                    <div key={animal.id}>
                            <h5>{animal.name}</h5>
                            <img src={animaal} alt = "" className="icon--dog" />
                            <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link> <br/>
                        <button onClick={()=> {this.props.deleteAnimal(animal.id)}} >DELETE</button>

                        <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push(`/animals/${animal.id}/edit`);
                        }}>
                        Edit
                        </button>
                </div>
                )
           }
                </section>
                </>
        );
    }
}

export default AnimalList;
