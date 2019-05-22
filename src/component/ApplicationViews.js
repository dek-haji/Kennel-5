import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from "./animal/AnimalList"
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import StudentList from './student/StudentList';
import AnimalManager from "./animal/AnimalManager"
import EmployeeManager from './employee/EmployeeManager';
import LocationManager from "./location/LocationManager"
import StudentManager from './student/StudentManager';


class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        students: []
    }

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
        .then(AnimalManager.getAll)
        .then(animals => {
            console.log("animals", animals);
            newState.animals = animals
        })
        .then(() => this.setState(newState))
    }

    deleteEmployees = (id) => {
        const newState = {};
        EmployeeManager.deleteEmployees(id)
            .then(EmployeeManager.getAll)
            .then(employees => {
                console.log(employees)
                newState.employees = employees
            })
            .then(() => this.setState(newState))
    }
    deleteLocation = (id) => {
        const newState = {};
        LocationManager.deleteLocation(id)
            .then(LocationManager.getAll)
            .then(locations => {
                console.log(locations)
                newState.locations = locations
            })
            .then(() => this.setState(newState))
    }

    deleteStudent = (id) => {
        const newState = {};
        StudentManager.deleteStudent(id)
            .then(StudentManager.getAll)
            .then(students => {
                console.log(students)
                newState.students = students
            })
            .then(() => this.setState(newState))
    }


    componentDidMount() {
        const newState = {}
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(console.log("component did mount fired up"))
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)

            .then(() => fetch("http://localhost:5002/students")
            .then(r => r.json()))
            .then(students => newState.students = students)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <LocationList locations={this.state.locations}
                                        deleteLocation={this.deleteLocation}/>
                }} />
                <Route path="/animals" render={() => {
                    return <AnimalList animals={this.state.animals}
                            deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees}
                                        deleteEmployees={this.deleteEmployees}/>
                }} />
                 <Route path="/students" render={() => {
                    return <StudentList students={this.state.students}
                                        deleteStudent={this.deleteStudent}/>
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews