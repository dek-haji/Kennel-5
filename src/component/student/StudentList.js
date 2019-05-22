import React, { Component } from 'react';
import pic from "./pic.png"
class StudentList extends Component {
    render() {
        return (
            <section className="locations">
                    <h1>Student List</h1>
                {
                this.props.students.map(student =>
                    <div key={student.id}>
                    <img src={pic} alt = "" className="icon--student" />
                        <p>{student.name}</p>
                        <button onClick={()=> {this.props.deleteStudent(student.id)}}>Delete</button>
                </div>
                )
           }
            </section>
        );
    }
}

export default StudentList;
