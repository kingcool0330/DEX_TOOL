import React from "react";
import Header from "./Header";
import Advertising from "../components/Dashboard/Advertising";
import Faq from "../components/Dashboard/Faq";
import VerifyUser from "../components/Dashboard/VerifyUser";
import Footer from "./Footer";

// load assets
import "../assets/css/dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <Advertising />
        <Faq />
        <VerifyUser />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
