import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";

const App = () => {
  useEffect(() => {
    const node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    if (localStorage.themeMode === "dark") {
      node.setAttribute("href", "/assets/css/dark.css");
    } else {
      node.setAttribute("href", "/assets/css/light.css");
    }
    node.setAttribute("id", "lightlink");
    document.getElementById("dextool-header").append(node);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/*" exact element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
