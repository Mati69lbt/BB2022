import axios from "axios";
import dotenv from "dotenv";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
dotenv.config();

// axios.defaults.baseURL = "https://breakingbadfront-production.up.railway.app";
// axios.defaults.baseURL = "https://bb2022-production.up.railway.app";
axios.defaults.baseURL = "https://bb2022-production.up.railway.app";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
