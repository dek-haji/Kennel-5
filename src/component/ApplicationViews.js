import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import LocationList from './location/LocationList'
import LocationDetails from "./location/LocationDetails"
import LocationManager from "./location/LocationManager"
import LocationForm from './location/LocationForm';
import StudentList from './student/StudentList';
import StudentManager from './student/StudentManager';
import StudentForm from "./student/StudentForm"
import AnimalManager from "./animal/AnimalManager"
import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetails"
import AnimalForm from "./animal/AnimalForm"
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeManager from './employee/EmployeeManager';
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import EmployeeDetails from "./employee/EmployeeDetails"
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


    addAnimal = animal =>
  AnimalManager.post(animal)
    .then(() => AnimalManager.all())
    .then(animals =>
      this.setState({
        animals: animals
      })
    );

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

    addEmployee = employee =>
  EmployeeManager.post(employee)
    .then(() => EmployeeManager.all())
    .then(employees =>
      this.setState({
        employees: employees
      })
        );

    updateEmployee= (editedEmployeeObj) => {
        return EmployeeManager.put(editedEmployeeObj)
        .then(() => EmployeeManager.all())
            .then(employees => {
                this.props.history.push("/employees")
                this.setState({
            employees: employees
          })
        });
    };

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

    addLocation = location =>
    LocationManager.post(location)
      .then(() => LocationManager.getAll())
      .then(locations =>
        this.setState({
          locations: locations
        })
        );

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


    addStudent = student =>
    StudentManager.post(student)
      .then(() => StudentManager.all())
      .then(students =>
        this.setState({
          students: students
        })
        );

        deleteStudent = (id) => {
            const newState = {};
            StudentManager.deleteStudents(id)
                .then(StudentManager.all)
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
                {/* location details */}
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )

                    // If the location wasn't found, create a default one
                    if (!location) {
                        location = { id: 404, name: "404",}
                    }

                    return <LocationDetails location={location}
                        deleteLocation={this.deleteLocation} />
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
                            return <EmployeeList {...props}
                                                deleteEmployee={this.deleteEmployee}
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
                <Route
                    path="/employees/:employeeId(\d+)/edit" render={props => {
                        return <EmployeeEditForm {...props}  updateEmployee={this.updateEmployee}/>
                    }} />

                 <Route exact path="/students" render={(props) => {
                    return <StudentList {...props}
                                        deleteStudent={this.deleteStudent}
                                        students={this.state.students} />
                }} />
                 <Route path="/students/new" render={(props) => {
                    return <StudentForm {...props}
                    addStudent={this.addStudent}
                       />
                    }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)