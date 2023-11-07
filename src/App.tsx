import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./component/UserList";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import TypeList from "./component/TypeList";
import ProductList from "./component/ProductList";
import LayOut from "./component/LayOut";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
