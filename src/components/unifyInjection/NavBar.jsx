import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{
      padding: 10,
      backgroundColor: '#f0f0f0',
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTop: '1px solid #ddd',
      width: '100%'
    }}>
      <NavLink to="/bossHouse" style={({ isActive }) => ({
        margin: '0 20px',
        color: isActive ? 'blue' : 'black',
        textDecoration: isActive ? 'underline' : 'none',
        padding: '5px 10px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'block'
      })}>
        Home
      </NavLink>
      <NavLink to="/bossHouse/about" style={({ isActive }) => ({
        margin: '0 20px',
        color: isActive ? 'blue' : 'black',
        textDecoration: isActive ? 'underline' : 'none',
        padding: '5px 10px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'block'
      })}>
        About
      </NavLink>
      <NavLink to="/bossHouse/tools" style={({ isActive }) => ({
        margin: '0 20px',
        color: isActive ? 'blue' : 'black',
        textDecoration: isActive ? 'underline' : 'none',
        padding: '5px 10px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'block'
      })}>
        Tools
      </NavLink>
    </nav>
  );
};

export default NavBar;