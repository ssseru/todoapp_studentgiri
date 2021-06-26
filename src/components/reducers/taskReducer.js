import { FETCH_TASKS, NEW_TASK, REMOVE_TASK } from "../actions/types";

const initialState = {
  tasks: [],
  task: {},
};

export default function foo(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
      // console.log("Fetch Task reducer");
      return {
        ...state,
        tasks: action.payload,
      };
    case NEW_TASK:
      // console.log("New Task reducer");
      return {
        ...state,
        task: action.payload,
      };
    case REMOVE_TASK:
      // console.log("Remove Task reducer");
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
}
