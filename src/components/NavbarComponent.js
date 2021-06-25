import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Tasks
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Tasks
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/addtask" className="nav-link">
                Add New Task
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
