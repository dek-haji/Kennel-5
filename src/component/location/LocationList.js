import React, { Component } from 'react';
import local from "./local.png"
class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                    <h1>Locations</h1>
                {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        <p>{location.name}</p>
                        <img src={local} alt = "" className="icon--location" />
                        <p>{location.address}</p>
                    <button onClick={()=> {this.props.deleteLocation(location.id)}}>Delete</button>
                </div>
                )
           }
            </section>
        );
    }
}

export default LocationList;
