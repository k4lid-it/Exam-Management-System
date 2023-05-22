import React, { useState } from 'react';
import './Header-Footer.css';
import './navMenu.css';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ul className="header-items">

        <li className="logo-item">
          <img src="https://icon-library.com/images/blue-exit-icon/blue-exit-icon-8.jpg" alt="Logout Logo" />
        </li>

        <li className="logo-item">
          <img src={process.env.PUBLIC_URL + '/home-button-icon.png'} alt="Home Logo" />
        </li>

        <li className="dropdown" onClick={toggleDropdown}>
        <img className='logo-item' src={process.env.PUBLIC_URL + '/dropdown-button-icon.png'} alt="dropdown icon" />
          {isOpen && (
            <ul className="dropdown-menu">
              <li>exam rooms</li>
              <li>IT support tickets</li>
            </ul>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
