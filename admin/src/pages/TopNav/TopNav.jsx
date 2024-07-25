import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBell,
  faUser,
  faSearch,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../component/Input/Input";
import "./TopNav.css";
import "./TopNavResponsive.css";
import { StoreContext } from "../../context/StoreContext";

const TopNav = () => {
  const { theme, toggleTheme } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <div className="logo-search">
        <h2>
          <span>DashBoard</span>
        </h2>
        <div className="search-container">
          <Input type="search" placeholder="Search..." className="search-bar" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>

      <div className="btn">
        <FontAwesomeIcon
          onClick={handleChange}
          icon={menuOpen ? faTimes : faBars}
          className="menu-icon"
        />
      </div>

      <div className="user-profile">
        <div className="theme">
          <FontAwesomeIcon
            onClick={toggleTheme}
            icon={theme === "light" ? faMoon : faSun}
            className="user-icon"
          />
        </div>
        <div className="notification">
          <FontAwesomeIcon icon={faBell} className="user-icon" />
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
