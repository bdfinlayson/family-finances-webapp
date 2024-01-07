import React from 'react';
import './App.css';
import {NavBar} from "./components/layout/Navbar";
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
        <h1>LOADING...</h1>
    );
  }

  return (
      <NavBar />
  )

}

export default App;
