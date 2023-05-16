import React from "react";
import  '../../assets/Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Postal Code Lookup - Demo</h1>
      <nav className="nav">
        <ul className="list">
          <li className="item">Home</li>
          <li className="item">About</li>
          <li className="item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
