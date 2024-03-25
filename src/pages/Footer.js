import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faTelegram,
  faTiktok,
  faReddit,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleDollarToSlot,
  faCoins,
  faGlobe,
  faMoon,
  faMortarPestle,
  faSun,
  faX,
} from "@fortawesome/free-solid-svg-icons";

// load assets
import "../assets/css/footer.scss";

const AboutUsData = [
  {
    name: "About",
  },
  {
    name: "Business Contacts",
  },
  {
    name: "Careers",
  },
  {
    name: "Announcements",
  },
  {
    name: "News",
  },
  {
    name: "Press",
  },
  {
    name: "Legal",
  },
  {
    name: "Terms",
  },
  {
    name: "Privacy",
  },
  {
    name: "Building Trust",
  },
  {
    name: "Blog",
  },
  {
    name: "Community",
  },
  {
    name: "Sitemap",
  },
  {
    name: "Risk Warning",
  },
  {
    name: "Notices",
  },
  {
    name: "Downloads",
  },
  {
    name: "Desktop Application",
  },
];

const productData = [
  {
    name: "Exchange",
  },
  {
    name: "Buy Crypto",
  },
  {
    name: "Leveraged Tokens",
  },
  {
    name: "TradingView",
  },
  {
    name: "Pay",
  },
  {
    name: "Academy",
  },
  {
    name: "Live",
  },
  {
    name: "Tax",
  },
  {
    name: "Gift Card",
  },
  {
    name: "Launchpad & Launchpool",
  },
  {
    name: "Auto-Invest",
  },
  {
    name: "ETH Staking",
  },
  {
    name: "NFT",
  },
  {
    name: "BNB",
  },
  {
    name: "BABT",
  },
  {
    name: "Research",
  },
  {
    name: "Charity",
  },
];

const BusinessData = [
  {
    name: "P2P Merchant Application",
  },
  {
    name: "P2Pro Merchant Application",
  },
  {
    name: "Listing Application",
  },
  {
    name: "Institutional & VIP Services",
  },
  {
    name: "Labs",
  },
];

const LearnData = [
  {
    name: "Learn * Earn",
  },
  {
    name: "Browse Crypto Prices",
  },
  {
    name: "Bitcoin Price",
  },
  {
    name: "Ethereum Price",
  },
  {
    name: "Browse Crypto Price Predictions",
  },
  {
    name: "Bitcoin Price Prediction",
  },
  {
    name: "Ethereum Price Prediction",
  },
  {
    name: "Buy Bitcoin",
  },
  {
    name: "Buy BNB",
  },
  {
    name: "Buy Ripple",
  },
  {
    name: "Buy Dogecoin",
  },
  {
    name: "Buy Ethereum",
  },
  {
    name: "Buy Tradable Altcoins",
  },
];

const ServiceData = [
  {
    name: "Affiliate",
  },
  {
    name: "Referral",
  },
  {
    name: "OTC Trading",
  },
  {
    name: "Historical Market Data",
  },
  {
    name: "Proof of Reserves",
  },
];

const SupportData = [
  {
    name: "24/7 Chat Support",
  },
  {
    name: "Support Center",
  },
  {
    name: "Product Feedback & Suggestions",
  },
  {
    name: "Fees",
  },
  {
    name: "APIs",
  },
  {
    name: "Binance Verify",
  },
  {
    name: "Trading Rules",
  },
  {
    name: "Binance Airdrop Portal",
  },
  {
    name: "Law Enforcement Requests",
  },
];

const Footer = () => {
  const [themeFlag, setThemeFlag] = useState(
    localStorage.themeMode === "dark" ? "dark" : "light"
  );

  const handleChangeTheme = () => {
    const node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    if (themeFlag === "dark") {
      node.setAttribute("href", "/assets/css/light.css");
      setThemeFlag("light");
    } else {
      node.setAttribute("href", "/assets/css/dark.css");
      setThemeFlag("dark");
    }
    node.setAttribute("id", "lightlink");
    document.getElementById("dextool-header").append(node);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="main">
          <div className="link-section">
            <div className="menu-list">
              <h3 className="title">Community</h3>
              <div className="link-list">
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faDiscord}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faTelegram}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faTiktok}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faFacebook}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faX} />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faReddit}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faInstagram}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faCoins}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faYoutube}
                  />
                </a>
                <a className="link" href="/#" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faMortarPestle}
                  />
                </a>
              </div>
              <div className="toggle-list">
                <div className="toggle-item">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faGlobe}
                  />
                  <span className="toggle-text">English</span>
                </div>
                <div className="toggle-item">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faCircleDollarToSlot}
                  />
                  <span className="toggle-text">USD-$</span>
                </div>
                <div className="toggle-item">
                  <span className="toggle-text">Theme</span>
                  <div
                    className={
                      themeFlag === "light"
                        ? "theme-section"
                        : "theme-section right-theme"
                    }
                    onClick={handleChangeTheme}
                  >
                    <FontAwesomeIcon
                      className={
                        themeFlag === "light"
                          ? "theme-icon left"
                          : "theme-icon right"
                      }
                      icon={themeFlag === "light" ? faSun : faMoon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-section">
            <div className="menu-list">
              <div className="menu">
                <h3 className="title">About Us</h3>
                {AboutUsData.map((item, key) => {
                  return (
                    <a href="/" key={key} target="_blank" className="menu-item">
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="menu-list">
              <div className="menu">
                <h3 className="title">Products</h3>
                {productData.map((item, key) => {
                  return (
                    <a href="/" key={key} target="_blank" className="menu-item">
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="menu-list">
              <div className="menu">
                <h3 className="title">Business</h3>
                {BusinessData.map((item, key) => {
                  return (
                    <a href="/" key={key} target="_blank" className="menu-item">
                      {item.name}
                    </a>
                  );
                })}
              </div>
              <div className="menu">
                <h3 className="title">Learn</h3>
                {LearnData.map((item, key) => {
                  return (
                    <a href="/" key={key} target="_blank" className="menu-item">
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="menu-list">
              <div className="menu">
                <h3 className="title">Service</h3>
                {ServiceData.map((item, key) => {
                  return (
                    <a href="/" key={key} target="_blank" className="menu-item">
                      {item.name}
                    </a>
                  );
                })}
              </div>
              <div className="menu">
                <h3 className="title">Support</h3>
                {SupportData.map((item, key) => {
                  return (
                    <a href="/" key={key} target="_blank" className="menu-item">
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
