import React, { useState } from 'react';
import './Header-Footer.css';
import './navMenu.css';
import { Link } from 'react-router-dom';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* <div className="logo">Exam Invigilation Portal</div> */}
      <ul className="header-items">
        <Link to="/login"
          onClick={() => { localStorage.setItem('auth', ' ') }}>
          <li className="logo-item">
            <img src="https://icon-library.com/images/blue-exit-icon/blue-exit-icon-8.jpg" alt="Logout Logo" />
          </li>
        </Link>

        <Link to="/Invigilator-home">
          <li className="logo-item">
            <img src={process.env.PUBLIC_URL + '/home-button-icon.png'} alt="Home Logo" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
