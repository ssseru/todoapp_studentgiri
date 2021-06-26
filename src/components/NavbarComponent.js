import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Navbar = () => {
  return (
    <nav className="nav-wrapper" style={{ backgroundColor: "#3e89d5" }}>
      <div className="container">
        <h1>ToDoApp</h1>
        <h4>Created with MERN Stack</h4>
        <p>Used redux for state management</p>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Task List</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/addtask">Add New Task</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
