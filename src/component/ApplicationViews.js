import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from "./animal/AnimalList"
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import StudentList from './student/StudentList';
import AnimalManager from "./animal/AnimalManager"
import EmployeeManager from './employee/EmployeeManager';
import LocationManager from "./location/LocationManager"
import StudentManager from './student/StudentManager';
import AnimalDetail from "./animal/AnimalDetails"
import AnimalForm from "./animal/AnimalForm"
import EmployeeForm from './employee/EmployeeForm';
import EmployeeDetails from "./employee/EmployeeDetails"
import LocationForm from './location/LocationForm';
import AnimalEditForm from "./animal/AnimalEditForm"
import Login from './authentication/Login'


class ApplicationViews extends Component {
 // Check if credentials are in local storage
 isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        locations: [],
        animals: [],
        employees: [],
        students: []
    }

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
        .then(AnimalManager.all)
        .then(animals => {
            console.log("animals", animals);
            newState.animals = animals
        })
        .then(() => this.setState(newState))
    }

    deleteEmployees = (id) => {
        const newState = {};
        EmployeeManager.deleteEmployees(id)
            .then(EmployeeManager.all)
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

    addAnimal = animal =>
  AnimalManager.post(animal)
    .then(() => AnimalManager.all())
    .then(animals =>
      this.setState({
        animals: animals
      })
    );

    addEmployee = employee =>
  EmployeeManager.post(employee)
    .then(() => EmployeeManager.all())
    .then(employees =>
      this.setState({
        employees: employees
      })
    );

    addLocation = location =>
    LocationManager.post(location)
      .then(() => LocationManager.getAll())
      .then(locations =>
        this.setState({
          locations: locations
        })
        );
    // update animals fetch call method
    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
        .then(() => AnimalManager.all())
            .then(animals => {
                this.props.history.push("/animals")
                this.setState({
            animals: animals
          })
        });
      };

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
                <Route path="/login" component={Login} />

                {/* location list card route path */}
                <Route exact path="/" render={(props) => {
                    return <LocationList {...props} //??
                                        locations={this.state.locations}
                                        deleteLocation={this.deleteLocation}/>
                }} />
                {/* location form route */}
                 <Route path="/new" render={(props) => {
                    return <LocationForm {...props}
                                        addLocation={this.addLocation} />
                    }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                                        animals={this.state.animals}
                                        deleteAnimal={this.deleteAnimal}/>
                }} />


                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
}} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Animal not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />

                {/* edit animal route path */}
                <Route
                    exact path="/animals/:animalId(\d+)"
                    render={props => {
                        return (
                        <AnimalDetail
                            {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals}
                        />
                        );
                    }}/>
                    <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
                    }} />

                {/* and checks if the user loged in and takes u to employee list card route path */}
                     <Route exact path="/employees" render={props => {
                        if (this.isAuthenticated()) {
                            return <EmployeeList deleteEmployee={this.deleteEmployee}
                                                employees={this.state.employees} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                        addEmployee={this.addEmployee} />
                    }} />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the employee wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "404", breed: "employee not found" }
                    }

                    return <EmployeeDetails employee={employee}
                        deleteEmployees={this.deleteEmployees} />
                }} />

                 <Route path="/students" render={() => {
                    return <StudentList students={this.state.students}
                                        deleteStudent={this.deleteStudent}/>
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)