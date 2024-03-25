import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Faq from "../components/Dashboard/Faq";
import VerifyUser from "../components/Dashboard/VerifyUser";

// load assets
import "../assets/css/dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <Faq />
        <VerifyUser />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
