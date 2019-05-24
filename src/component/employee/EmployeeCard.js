import React, { Component } from "react"
import { Link } from "react-router-dom"
import picpic from "./picpic.svg"


export default class EmployeeCard extends Component {
    render() {
        console.log("what is this employee",this.props.employee.id)
        return (
            <div key={this.props.employee.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={picpic} alt= "" className="icon--employee" />
                       <h5> {this.props.employee.name} </h5>
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.deleteEmployees(this.props.employee.id)}
                            className="card-link">Discharge</a>
                        <button type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/employees/${this.props.employee.id}/edit`);
                        }}>
                        Edit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}