import React from 'react';
import { useState } from 'react';

const Nav = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };


  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Log out</li>
        <li>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select an option</option>
              <option value="option1">Exam Rooms</option>
              <option value="option2">IT support tickets</option>
            </select>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
