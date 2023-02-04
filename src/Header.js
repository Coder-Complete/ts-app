import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="left-section">Amazon</div>
      <div className="right-section">
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
    </header>
  );
}

export default Header;
