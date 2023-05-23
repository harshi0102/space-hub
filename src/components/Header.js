import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <nav>
      <div className="header navcontainer">
        <div className="headerlogo navcontainer">
          <img src={logo} alt="spacehub" className="logoimg" />
          <h2>Space Travelers&apos; Hub</h2>
        </div>
        <div className="navcontainer">
          <Navbar />
        </div>
      </div>
      <hr className="hr" />
    </nav>
  );
}
