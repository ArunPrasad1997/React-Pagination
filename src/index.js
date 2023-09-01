import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
// import store from './store/redux-demo';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//   <Provider store={store}>
    <App />
//   </Provider>
);
