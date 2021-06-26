import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper" style={{ backgroundColor: "#3e89d5" }}>
      <div className="container">
        <h1>ToDoApp</h1>
        <h4>Created with MERN Stack</h4>
        <p>Used redux for state management</p>
        <ul className="right">
          <li>
            <Link to="/home">Tasks</Link>
          </li>
          <li>
            <Link to="/addtask">Add New Task</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
