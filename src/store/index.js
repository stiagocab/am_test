import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";

import rootReducers from "./reducers";


// PERSIST STORE
const saveState = (state) => {
  // PREVENT SAVE

  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignorar
  }
};

const loadState = () => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) {
      return {};
    }
    return JSON.parse(serializeState);
  } catch (err) {
    return {};
  }
};


const preloadedState = loadState();


const store = configureStore({
  reducer: rootReducers,
  middleware: [],
  devTools:
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__,
  preloadedState,
});

export default store;


store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
