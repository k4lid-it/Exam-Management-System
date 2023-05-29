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
        <Link to="/a5c00e90148cf48945c6c7601a66cce838134c02d6d52ca186ed1051a04d725cdd5d9f49bd856804cbea496b0ce31d51d5b1899b1c1d527b79e1388936ff22aa"
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
              {/* <Link to="/QR-code-scanner">    <li>QR Code scanner</li>     </Link> */}


            </ul>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
