import React, { Component } from 'react';
import picpic from "./picpic.svg"
class EmployeeList extends Component {
    handler = (event) => {
        console.log(event)
        this.props.deleteEmployees(this.props.employees.id)
    }
    render() {
        return (
            <section className="employees">
                    <h1>Employees</h1>
                {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <img src={picpic} alt = "" className="icon--employees" />
                        <p>{employee.name}</p>
                        <button onClick={()=> { this.props.deleteEmployees(employee.id)}}>Dismis</button>

                </div>
                )
           }
            </section>
        );
    }
}

export default EmployeeList;
