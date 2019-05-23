import React, { Component } from 'react';
import picpic from "./picpic.svg"

class EmployeeDetails extends Component {

    state = {
        saveDisabled: false  //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="employee">
                <div key={this.props.employee.id} className="card" >
                <div className="card-body">
                    <h4 className="card-title">
                    <img src={ picpic } alt = "" className="icon--employee" />
                            { this.props.employee.name }
                    </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                        { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                        () => this.props.deleteEmployees(this.props.employee.id)
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

export default EmployeeDetails;
