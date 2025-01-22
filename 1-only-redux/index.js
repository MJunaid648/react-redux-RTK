import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0 };

const reducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: store.counter + 1 };
    case "DECREMENT":
      return { counter: store.counter - 1 };
    case "ADD":
      return { counter: store.counter + action.payload.number };
    default:
      return store;
  }
};

const store = createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", payload: { number: 10 } });
