import React from "react";
import Faq from "../components/Dashboard/Faq";
import VerifyUser from "../components/Dashboard/VerifyUser";

// load assets
import "../assets/css/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Faq />
      <VerifyUser />
    </div>
  );
};

export default Dashboard;
