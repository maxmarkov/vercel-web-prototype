import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import './Header.css'; 

function Header() {

  /* variable to get value from the search bar */
  const [searchTerm, setSearchTerm] = useState("");

  /* fake API call  to jsonplaceholder */
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => console.log(data));
  }

  const handleChange = (value) => {
    setSearchTerm(value);
    fetchData(value);
  }

  return (
    <header className="header">
      <div className='search-bar-container'>
        <FaSearch className="search-icon"/>
        <input type="text" placeholder="Search" className="search-bar" value={searchTerm} onChange={(e) => handleChange(e.target.value)}/>
      </div>
      <div className="nav-links">
        <button className="sign-in-button">Log in</button>
        <button className="sign-up-button">Sign up</button>
      </div>
    </header>
  );
}

export default Header;