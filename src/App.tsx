import React from 'react';
import './App.css';
import {useAuth0} from "@auth0/auth0-react";
import {Layout} from "./components/layout/Layout";
import {NavBar} from "./components/layout/Navbar";

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
        <h1>LOADING...</h1>
    );
  }

  return (
      <Layout>
        <NavBar />
      </Layout>
  )

}

export default App;
