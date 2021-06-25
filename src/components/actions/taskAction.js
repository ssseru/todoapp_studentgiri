import { FETCH_TASKS, NEW_TASK } from "./types";

export const fetchTasks = () => (dispatch) => {
  console.log("Fetch Tasks action");
  fetch("http://localhost:5000/tasks")
    // .then((res) => console.log(res.json()))
    .then((res) => res.json())
    .then((tasks) =>
      dispatch({
        type: FETCH_TASKS,
        payload: tasks,
      })
    );
};

export const createTask = (taskData) => (dispatch) => {
  console.log("Create Task action");
  fetch("http://localhost:5000/tasks/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(taskData),
  })
    .then((res) => res.json())
    .then((task) =>
      dispatch({
        type: NEW_TASK,
        payload: task,
      })
    );
};
