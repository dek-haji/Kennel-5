import React, { Component } from "react"
import EmployeeCard from "./EmployeeCard"

export default class EmployeeList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="EmployeeButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/employees/new")}
                            className="btn btn-info">
                        Admit Employee
                    </button>
                </div>
                <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}