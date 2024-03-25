import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faDownload } from "@fortawesome/free-solid-svg-icons";

// load assets
import Logo from "../assets/image/brand.png";
import "../assets/css/header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="/" rel="referronor">
              Buy Crypto
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              Markets
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              Trade
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              Futures
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              earn
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              Square
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              More
            </a>
          </div>
        </div>
      </div>
      <div className="action">
        <div className="search">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faSearchengin} />
        </div>
        <div className="sign-in">
          <a href="/login">Sign In</a>
        </div>
        <div className="sign-up">
          <a href="/login">Sign Up</a>
        </div>
        <div className="download">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faDownload} />
        </div>
        <div className="global">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faGlobe} />
        </div>
      </div>
    </div>
  );
};

export default Header;
