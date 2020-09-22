import React from "react";

const Burger = ({ toggleShowMenu, humburgerActive }) => {
  return (
    <div
      onClick={toggleShowMenu}
      className={`hamburger hamburger--squeeze ${
        humburgerActive ? "is-active" : ""
      }`}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Burger;
