import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import CheckoutPage from "./pages/CheckoutPage";
import Checkout from "./components/Checkout";



function App() {
  return (
    <BrowserRouter> 
      <div className="app">
        <Header />
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="checkout" element={ <Checkout /> } />
      </Routes>
      </div>
    </BrowserRouter>
  )





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
