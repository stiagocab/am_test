import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

const store = configureStore({
  reducer: rootReducers,
  middleware: [],
  devTools:
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__,
});

export default store;
