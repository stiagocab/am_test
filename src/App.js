import React from "react";
import { Provider } from "react-redux";
import Container from "./layout/Container";
import store from "./store";

import "./normalize.scss";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <p>HOLA HP</p>
      </Container>
    </Provider>
  );
}

export default App;
