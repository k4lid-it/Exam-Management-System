import React, { useState } from 'react';
import './Closeticket.css';
import HeaderNonAdmin from '../HeaderNonAdmin';
import { Link } from 'react-router-dom';

export default function Closeticket() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== '') {
      // Submit the form
      console.log('Form submitted');
    } else {
      // Show error message or perform other validation logic
      console.log('Please select an option');
    }
  };


  const fetchTicketData = () => {
    // Simulating an API call or data retrieval
    return {
      room: '103',
      date: '16/5/2023',
      time: '2:26 PM',
      examPeriod: '103',
      service: 'Password',
      Description: 'the QR code is not working, the student needs a password to access the exam, please hurry up! Thank you in advance. One Piece is your uncle!'
    };
  };

  // Call the fetchTicketData function to get the ticket data
  const ticketData = fetchTicketData();


  return (
    <div>
      <HeaderNonAdmin />
    <div className='container'>
      <div className='item'>
        <h2>it support ticket</h2>
        <p>ticket information:</p>

        <table className='tablee'>
        <tbody>
            <tr>
              <td className="tdOne">Room:</td>
              <td className="tdTwo">{ticketData.room}</td>
            </tr>
            <tr>
              <td className="tdOne">Date:</td>
              <td className="tdTwo">{ticketData.date}</td>
            </tr>
            <tr>
              <td className="tdOne">Time:</td>
              <td className="tdTwo">{ticketData.time}</td>
            </tr>
            <tr>
              <td className="tdOne">Exam Period:</td>
              <td className="tdTwo">{ticketData.examPeriod}</td>
            </tr>
            <tr>
              <td className="tdOne">Service:</td>
              <td className="tdTwo">{ticketData.service}</td>
            </tr>
            <tr>
              <td className="tdOne">Description:</td>
              <td className="tdTwo">{ticketData.Description}</td>
            </tr>
          </tbody>
        </table>

        <form onSubmit={handleSubmit}>
          <div className='form-info'>
            <div className='inputs'>
              <label>
                <input
                  type='radio'
                  name='resolve'
                  value='Resolved'
                  checked={selectedOption === 'Resolved'}
                  onChange={handleOptionChange}
                  required
                />
                Resolved
              </label>
              <label>
                <input
                  type='radio'
                  name='resolve'
                  value='Unresolved'
                  checked={selectedOption === 'Unresolved'}
                  onChange={handleOptionChange}
                  required
                />
                Unresolved
              </label>
            </div>

            <br />

            <textarea
              name=''
              id=''
              rows='3'
              placeholder='Write a description... (Optional)'
            ></textarea>
          </div>
          <div className='close'>
            <button type='submit'>Close Ticket</button>
            <Link to="/IT-support/assigned-tickets">  <button type='submit'>Cancel</button>  </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
