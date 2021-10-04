import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";


import store from "./store";

function EntryApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<EntryApp />, document.getElementById("root"));
