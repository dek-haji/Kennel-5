import React, { Component } from 'react';
import local from "./local.png"
import { Link } from 'react-router-dom'
import "./Location.css"
class LocationList extends Component {
    render() {
        return (
            <>
            <div className="locationButton">
            <button type="button"
                    className="btn btn-info"
                    onClick={() => {
                        this.props.history.push("/new")}
                    }>
                Register New Locations
            </button>
        </div>
            <section className="locations">
                    <h1>Locations</h1>
                {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        <p>{location.name}</p>
                        <img src={local} alt = "" className="icon--location" />
                        <p>{location.address}</p>
                        <button onClick={() => { this.props.deleteLocation(location.id) }}>Delete</button>
                        <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                </div>
                )
           }
                </section>
                </>
        );
    }
}

export default LocationList;
