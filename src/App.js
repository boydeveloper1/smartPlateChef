import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/header.components";
import Home from "./pages/Home/home.components";

const App = () => {
  // let routes;

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
