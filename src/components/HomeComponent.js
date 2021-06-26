import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTasks, deleteTask } from "./actions/taskAction";

class Home extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  handleRemove = (id) => {
    this.props.deleteTask(id);
  };

  render() {
    const tasksList = this.props.tasks.map((task) => (
      <div key={task.id}>
        <h3>{task.task}</h3>
        <p>{task.description}</p>
        <p>{task._id}</p>
        <button
          onClick={() => {
            this.handleRemove(task._id);
          }}
        >
          Mark as completed
        </button>
      </div>
    ));
    return (
      <div>
        {/* {console.log(this.props.tasks)} */}
        <h1>Tasks</h1>
        {tasksList}
      </div>
    );
  }
}

Home.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  newTask: PropTypes.object,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  newTask: state.tasks.task,
});

export default connect(mapStateToProps, { fetchTasks, deleteTask })(Home);
