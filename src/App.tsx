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
import Register from "./register/Register";
import Login from "./login/Login";
import List from "./list/List";
const isAuthenticated = true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Register />} />
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
