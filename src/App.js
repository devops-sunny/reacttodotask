import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./page/PageNotFound/PageNotFound.jsx";
import LoginForm from "./page/auth/Login";
import SignupForm from "./page/auth/Signup.jsx";
import Home from "./page/home/Home";

function App() {
  const Auth = [
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {Auth.map((item, index) => {
            return (
              <>
                <Route key={index} path={item.path} element={item.element} />
              </>
            );
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
