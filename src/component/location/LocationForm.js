import React, { Component } from 'react';

class LocationForm extends Component {
    //set the initail state of the location
    state = {
        locationName: ""    //?? does it needs to come from the props?
    };

    // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
  };

     /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */

    constructNewLocation = (evt) => {
        evt.preventDefault();
        const location = {
            name: this.state.locationName
        }
        // Create the employee and redirect user to employee list
        this.props.addLocation(location)
            .then(() => this.props.history.push("/"));
    }

    render() {
        return (
            <React.Fragment>
            <form className="locationName">
     <div className="form-group">
       <label htmlFor="locationName">location name</label>
       <input
         type="text"
         required
         className="form-control"
         onChange={this.handleFieldChange}
         id="locationName"
         placeholder="Location name"
       />
        <button
        type="button"
       onClick={this.constructNewLocation}
       className="btn btn-primary">
       Submit
     </button>
                   </div>
   </form>
       </React.Fragment>
        );
    }
}

export default LocationForm;
