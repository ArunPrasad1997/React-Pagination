import { createStore } from "redux";

const paginateReducer = (state = { currentState: 1 }, action) => {
  if (action.type === "increment") {
    return {
      currentState: state.currentState,
    };
  }
  if (action.type === "decrement") {
    return {
      currentState: state.currentState - 1,
    };
  }

  return state;
};

const store = createStore(paginateReducer);

export default store;
