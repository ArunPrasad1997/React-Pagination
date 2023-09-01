import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BeerFiltering from "./components/Date-FIlter/Beer-Filtering";

// import store from './store/redux-demo';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/filter-beers", element: <BeerFiltering /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Provider store={store}>
  <RouterProvider router={router} />
  //   </Provider>
);
