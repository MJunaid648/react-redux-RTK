import { createStore } from "redux";

const counterReducer = (state = { counter: 5 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "ADD":
      return { counter: state.counter + action.payload };
    case "SUBTRACT":
      return { counter: state.counter - action.payload };
    default:
      break;
  }
  return state;
};

const counterStore = createStore(counterReducer);
export default counterStore;
