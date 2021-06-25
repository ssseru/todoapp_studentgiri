import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTask } from "./actions/taskAction";

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
      <div>
        <h1>Add A NEW Task</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Task Title: </label>
            <br />
            <input
              type="text"
              name="task"
              onChange={this.onChange}
              value={this.state.task}
            />
          </div>
          <br />
          <div>
            <label>Description: </label>
            <br />
            <textarea
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Addtask.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default connect(null, { createTask })(Addtask);
