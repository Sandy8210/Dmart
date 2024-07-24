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
import { ThemeContext } from "../../context/ThemeContext";
import "./TopNav.css";
import "./TopNavResponsive.css";
import { navData } from "../../utills/navData";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <div className="logo-search">
        <h2>
          <span>D</span>mart<span> DashBoard</span>
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

      <div className="nav-item">
        <ul>
          {navData.map((item, index) => (
            <NavLink key={index} to={item.to}>
              {item.name}
            </NavLink>
          ))}
        </ul>
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
