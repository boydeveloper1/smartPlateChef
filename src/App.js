import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { AuthContext } from "./components/context/auth-context";
import { useAuth } from "./Hooks/auth-hook";
import Header from "./components/Header/header.components";
import Home from "./pages/Home/home.components";
import Authentication from "./pages/Auth/auth.components";
import Dashboard from "./pages/Dashboard/dashboard.components";

const App = () => {
  const { token, login, logout, userId, name } = useAuth();

  let routes;

  if (token) {
    routes = (
      <>
        <Route index element={<Home />} />
        <Route path="/:userId/dashboard" element={<Dashboard />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route index element={<Home />} />
        <Route path="/authentication" element={<Authentication />}></Route>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        name: name,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Routes>
        <Route path="/" element={<Header />}>
          {routes}
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
