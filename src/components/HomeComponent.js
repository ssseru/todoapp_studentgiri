import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTasks } from "./actions/taskAction";

class Home extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const tasksList = this.props.tasks.map((task) => (
      <div key={task.id}>
        <h3>{task.task}</h3>
        <p>{task.description}</p>
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
  tasks: PropTypes.array.isRequired,
  newTask: PropTypes.object,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  newTask: state.tasks.task,
});

export default connect(mapStateToProps, { fetchTasks })(Home);
