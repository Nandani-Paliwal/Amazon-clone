import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    //useEffect is like a dynamic if statement
    //will only run once when the app component loads..

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just logged in OR the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
