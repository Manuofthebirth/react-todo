import React from 'react';

// same as export in About.js
function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo List</h1>
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

export default Header;