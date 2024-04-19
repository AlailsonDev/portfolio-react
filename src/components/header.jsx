import React, { useState } from 'react';
import logo from "../images/logo.png";


function Header() {

  
  

  return (
    <header className="header" id="top">
      <img className="logo-img" src={logo} alt='Logo'/>
      
      <nav className="nav">
        <ul className="menu">
          <a href="#top">
            <li className="link">_home</li>
          </a>
          <a href="#portfolio">
            <li className="link">_portfolio</li>
          </a>
          <a href="#about">
            <li className="link">_sobre</li>
          </a>
          <a href="#contact">
            <li className="link">_contato</li>
          </a>
        </ul>
      </nav>
      
      
    </header>
  );
}

export default Header;
