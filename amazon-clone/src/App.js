import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="checkout" element={<div>checkout Page</div>} />
        <Route 
          path='t' />

      </Routes>
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
