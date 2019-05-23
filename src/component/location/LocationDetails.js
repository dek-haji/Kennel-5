import React, { Component } from 'react';
import local from "./local.png"

class LocationDetails extends Component {

    state = {
        saveDisabled: false  //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="location">
                <div key={this.props.location.id} className="card" >
                <div className="card-body">
                    <h4 className="card-title">
                    <img src={ local } alt = "" className="icon--location" />
                            { this.props.location.name }
                    </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                        { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                        () => this.props.deleteLocation(this.props.location.id)
                                    )
                            }
                        } disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                    </div>
            </section>
        );
    }
}

export default LocationDetails;
