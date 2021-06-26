import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTasks, deleteTask } from "./actions/taskAction";
import { Card, Button } from "reactstrap";

class Home extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  componentDidUpdate() {
    this.props.fetchTasks();
  }

  handleRemove = (id) => {
    this.props.deleteTask(id);
  };

  render() {
    const tasksList = this.props.tasks.map((task) => (
      <div className="container" key={task.id}>
        <Card style={{ background: "#d1c4e9" }}>
          <div>
            Task title:<b> {task.task}</b>
            <br />
            Description: {task.description}
            <br />
          </div>
          <Button
            onClick={() => {
              this.handleRemove(task._id);
            }}
          >
            Delete task
          </Button>
        </Card>
        <br />
      </div>
    ));
    return (
      <div className="container">
        {tasksList.length > 0 ? (
          <h1>
            TasksList:
            {tasksList}
          </h1>
        ) : (
          <h3>No tasks added</h3>
        )}
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
