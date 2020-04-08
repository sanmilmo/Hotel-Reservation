import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
  if (action.type === "logout") {
    return { ...state, loggedIn: false };
  }
  if (action.type === "query") {
    return { ...state, serachQuery: action.q };
  }
  if (action.type === "minimum-price") {
    return { ...state, min: action.price };
  }
  if (action.type === "maximum-price") {
    return { ...state, max: action.price };
  }
  return state;
};
const store = createStore(
  reducer,
  {
    loggedIn: false,
    serachQuery: "",
    min: 0,
    max: 100000
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
