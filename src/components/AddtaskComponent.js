import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTask } from "./actions/taskAction";

import {
  Button,
  FormGroup,
  Label,
  Input,
  Form,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

class Addtask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      description: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    // e.preventDefault();

    const task = {
      task: this.state.task,
      description: this.state.description,
    };

    this.props.createTask(task);
  }

  render() {
    return (
      <div className="container">
        <h1>Add a new Task</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="task">Task title:</Label>
            <Input
              type="text"
              id="task"
              name="task"
              value={this.state.task}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description:</Label>
            <Input
              type="textbox"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </FormGroup>
          <br />
          <Button type="submit" value="submit" color="primary">
            Add task
          </Button>
        </Form>
      </div>
    );
  }
}

Addtask.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default connect(null, { createTask })(Addtask);
