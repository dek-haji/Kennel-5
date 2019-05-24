import React, { Component } from 'react';
import { Link } from "react-router-dom";
import picpic from "./picpic.svg"
import "./Employee.css"
class EmployeeList extends Component {
    handler = (event) => {
        console.log(event)
        this.props.deleteEmployees(this.props.employees.id)
    }
    render() {
        return (
            <>
             <div className="employeeButton">
                    <button type="button"
                            className="btn btn-info"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Register New Employee
                    </button>
                </div>
            <section className="employees">
                    <h1>Employees</h1>
                {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <img src={picpic} alt = "" className="icon--employees" />
                        <p>{employee.name}</p>
                        <button onClick={() => { this.props.deleteEmployees(employee.id) }}>Dismis</button>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        <button type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/employees/${employee.id}/edit`);
                        }}>
                        Edit
                        </button>

                </div>
                )
           }
                </section>
                </>
        );
    }
}

export default EmployeeList;
