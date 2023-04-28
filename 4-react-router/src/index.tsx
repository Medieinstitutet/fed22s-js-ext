import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { About } from "./pages/About";
import { SuperheroList } from "./pages/SuperheroList";
import { SuperheroView } from "./pages/SuperHeroView";
import { superheroLoader } from "./loaders/superheroLoader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/superheroes",
    element: <SuperheroList></SuperheroList>,
    children: [],
    loader: superheroLoader,
  },
  {
    path: "/superheroes/:id",
    element: <SuperheroView></SuperheroView>,
    loader: superheroLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
