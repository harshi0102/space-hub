import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from '../styles/Header.module.css';

function Header() {
  const navLinkStyles = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <>
      <header className={styles.heading}>
        <div>
          <img src={logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <nav>
          <ul className={styles.navbar}>
            <li><NavLink style={navLinkStyles} to="/">Rockets</NavLink></li>
            <li><NavLink style={navLinkStyles} to="/missions">Missions</NavLink></li>
            <li className={styles.listitem} />
            <li><NavLink style={navLinkStyles} to="/profile">My Profile</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
