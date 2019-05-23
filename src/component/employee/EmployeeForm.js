import React, { Component } from 'react';

class EmployeeForm extends Component {

// Set initial state
state = {
    employeeName: ""
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

    constructNewEmployee = evt => {
        evt.preventDefault();
          const employee = {
            name: this.state.employeeName
          };

          // Create the employee and redirect user to employee list
          this.props.addEmployee(employee)
            .then(() => this.props.history.push("/employees"));
        }

    render() {
        return (
            <React.Fragment>
                 <form className="employeeName">
          <div className="form-group">
            <label htmlFor="employeeName">employee name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="employeeName"
              placeholder="Employee name"
            />
             <button
             type="button"
            onClick={this.constructNewEmployee}
            className="btn btn-primary">
            Submit
          </button>
                        </div>
        </form>
            </React.Fragment>
        );
    }
}

export default EmployeeForm;
