import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./store";

store.dispatch({
  type: "account/deposit",
  payload: {
    balance: 250,
    loan: 0,
    loanPurpose: "",
  },
});

console.log(store.getState());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
