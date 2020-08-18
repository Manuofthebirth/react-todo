import React from 'react';
import { Link } from 'react-router-dom';

// same as export in About.js
function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

// Header style variable
const headerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '10px',
  textAlign: 'center'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;