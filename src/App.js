import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/Notfound";
import Footer from "./pages/Footer";

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
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/*" exact element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
