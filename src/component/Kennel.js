import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import { BrowserRouter as Router } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
        <Router>
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        </Router>
        )
    }
}

export default Kennel