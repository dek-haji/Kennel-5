import React, { Component } from 'react'
import EmployeeManager from "./EmployeeManager"

export default class EmployeeEditForm extends Component {
    //set initial component state
    state = {
        EmployeeName: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    updateExisitingEmployee = (evt) => {
        evt.preventDefault()
        const editEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.EmployeeName
        };
        this.props.updateEmployee(editEmployee)
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
       onClick={this.updateExisitingEmployee}
       className="btn btn-primary">
       Submit
     </button>
                   </div>
   </form>
       </React.Fragment>
        )
    }
}