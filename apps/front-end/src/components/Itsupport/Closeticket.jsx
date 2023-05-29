import React, { useState, useEffect } from 'react';
import './Closeticket.css';
import HeaderIT from '../HeaderIT';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Closeticket() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const postToClose = () => {
    axios.post('http://localhost:4000/support/ticket-close',
      {
        ticketID: sessionStorage.getItem('ticketID'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    )
  }

  const postToReopen = () => {
    axios.post('http://localhost:4000/support/ticket-reopen',
      {
        ticketID: sessionStorage.getItem('ticketID'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== '') {
      if (selectedOption === 'Resolved') { postToClose() }
      else if (selectedOption === 'Unresolved') { postToReopen() }
      window.location.href = '/IT-support/assigned-tickets';
    }

    else {
      // Show error message or perform other validation logic
      console.log('Please select an option');
    }
  };


  let [examRoomData, setExamRoomData] = useState([]);
  const token = localStorage.getItem('auth');
  const id = sessionStorage.getItem('ticketID');

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:4000/support/ticket-details?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Unauthorized") {
          window.location.href = "../security-stop";
        } else {
          setExamRoomData(data);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, [token]);



  return (
    <div>
      <HeaderIT />
      <div className='container'>
        <div className='item'>
          <h2>it support ticket</h2>
          <p>ticket information:</p>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <table className='tablee'>
              <tbody>
                <tr>
                  <td className='tdOne'>Room:</td>
                  <td className='tdTwo'>{examRoomData.room}</td>
                </tr>
                <tr>
                  <td className='tdOne'>Time:</td>
                  <td className='tdTwo'>{examRoomData.time}</td>
                </tr>
                <tr>
                  <td className='tdOne'>Service:</td>
                  <td className='tdTwo'>{examRoomData.type}</td>
                </tr>
                <tr>
                  <td className='tdOne'>Description:</td>
                  <td className='tdTwo'>{examRoomData.description}</td>
                </tr>
              </tbody>
            </table>

          )}

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
                  Mark as Resolved
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
                  Reopen the ticket
                </label>
              </div>

              {/* <br />

              <textarea
                name=''
                id=''
                rows='3'
                placeholder='Write a description... (Optional)'
              ></textarea> */}
            </div>
            <div className='close'>
              <button type='submit' onClick={() => { window.location.href = '/IT-support/assigned-tickets'; }}>ٍSubmit</button>
              <Link to='/IT-support/assigned-tickets'>
                <button type='submit'>Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
