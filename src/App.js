import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/header.components";
import Home from "./pages/Home/home.components";
import Authentication from "./pages/Auth/auth.components";

const App = () => {
  // let routes;

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/authentication" element={<Authentication />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
