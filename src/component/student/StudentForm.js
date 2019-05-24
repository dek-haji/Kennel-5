import React, { Component } from 'react';

class StudentForm extends Component {

// Set initial state
state = {
    studentName: ""
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

    constructorNewStudent = evt => {
        evt.preventDefault();
          const student = {
            name: this.state.studentName
          };

          // Create the employee and redirect user to employee list
          this.props.addStudent(student)
            .then(() => this.props.history.push("/students"));
        }

    render() {
        return (
            <React.Fragment>
                 <form className="studentName">
          <div className="form-group">
            <label htmlFor="studentName">student name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="studentName"
              placeholder="Student name"
            />
             <button
             type="button"
            onClick={this.constructorNewStudent}
            className="btn btn-primary">
            Submit
          </button>
                        </div>
        </form>
            </React.Fragment>
        );
    }
}

export default StudentForm;
