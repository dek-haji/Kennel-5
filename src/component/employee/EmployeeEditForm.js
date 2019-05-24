import React, { Component } from 'react'
import EmployeeManager from "./EmployeeManager"

export default class EmployeeEditForm extends Component {
    //set initial component state
    state = {
      employeeName: "",
      name: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
      console.log(stateToChange)
    }
    updateExisitingEmployee = (evt) => {
      evt.preventDefault()
      const editEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.employeeName
      };
      console.log("edit employee", editEmployee)
        this.props.updateEmployee(editEmployee)
    }


//the steps are
//  use componentDidMount life cycle methods to do the following things
// 1.get the ID from the route
// 2. using that ID fetch the employees from the API
// 3. set EmployeeName state to employeeNAme that came from the API

  componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId)
        .then(employee => {
          this.setState({
            name: employee.name,
          });
        })
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
         placeholder={this.state.name}
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