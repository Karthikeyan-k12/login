import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Register from "./components/register/Register";
import Success from "./components/register/Success";
import Login from "./components/login/Login";
import List from "./components/list/List";

const isAuthenticated = true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Register />} />
      <Route path="registered-successfully" element={<Success/>}/>
      <Route path="login" element={<Login />} />
      <Route
        path="/list"
        element={isAuthenticated ? <List /> : <Navigate to="/login" />}
      />
    </>
  )
);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
