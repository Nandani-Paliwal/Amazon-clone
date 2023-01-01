import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/">
              <Header />
            <Home />
          </Route>
          <Route path="/checkout">
              <Header />
            <Checkout />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />
  //   },
  //   {
  //     path: "/t",
  //     element: <Header />

  //   }
  // ])

  // return (
  //   <RouterProvider router={router}>
  //     <Header />
  //     <Home />
  //   </RouterProvider>

  // );
}

export default App;
