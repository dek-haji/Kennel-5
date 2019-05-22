import React, { Component } from 'react';
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
            <section className="animals">
                    <h1>Animals</h1>
                {
                    this.props.animals.map(animal =>
                    <div key={animal.id}>
                            <img src={animaal} alt = "" className="icon--dog" />
                            <p>{animal.name}</p>

                        <button onClick={()=> {this.props.deleteAnimal(animal.id)}} >DELETE</button>
                </div>
                )
           }
            </section>
        );
    }
}

export default AnimalList;
