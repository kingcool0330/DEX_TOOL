import React from "react";

// load assets
import "../../assets/css/verifyuser.scss";

const VerifyUser = () => {
  return (
    <div className="verify-user">
      <div className="title">For Verified Users</div>
      <div className="content">
        Get up to <span className="strong-text">100 USDT</span> in rewards
      </div>
      <div className="btn-section">
        <a className="sign-btn" href="/register" rel="noreferrero">
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default VerifyUser;
