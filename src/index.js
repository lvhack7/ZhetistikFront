import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserStore from "./services/stores/UserStore";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore()
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById("root"),
);
