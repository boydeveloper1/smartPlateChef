import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { AuthContext } from "./components/context/auth-context";
import { useAuth } from "./Hooks/auth-hook";
import LoadingSpinner from "./components/Loading-Spinner/loading-spinner.components";

const Header = lazy(() => import("./components/Header/header.components"));
const Home = lazy(() => import("./pages/Home/home.components"));
const Authentication = lazy(() => import("./pages/Auth/auth.components"));
const Dashboard = lazy(() => import("./pages/Dashboard/dashboard.components"));

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
    <Suspense
      fallback={
        <div>
          <LoadingSpinner />
        </div>
      }
    >
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
    </Suspense>
  );
};

export default App;
