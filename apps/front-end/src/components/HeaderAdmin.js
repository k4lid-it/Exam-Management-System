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
        <Link to="/Login"
          onClick={() => { localStorage.setItem('auth', ' ') }}>
          <li className="logo-item">
            <img src="https://icon-library.com/images/blue-exit-icon/blue-exit-icon-8.jpg" alt="Logout Logo" />
          </li>
        </Link>

        <Link to="/Admin-home">
          <li className="logo-item">
            <img src={process.env.PUBLIC_URL + '/home-button-icon.png'} alt="Home Logo" />
          </li>
        </Link>
        <li className="dropdown" onClick={toggleDropdown}>
          <img className='logo-item' src={process.env.PUBLIC_URL + '/dropdown-button-icon.png'} alt="dropdown icon" />
          {isOpen && (
            <ul className="dropdown-menu">
              <Link to="/AdminExamsPage">    <li>Exam rooms</li>     </Link>
              <Link to="/Admin/assigned-Tickets">    <li>My tickets</li>     </Link>
              <Link to="/Admin/Tickets">    <li>All tickets</li>     </Link>
              <Link to="/Admin/Tickets">    <li>QR Code scanner</li>     </Link>


            </ul>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
