import React, { useState, useEffect } from 'react';
import './Closeticket.css';
import HeaderIT from '../HeaderIT';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Closeticket() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
    }

    else {
      // Show error message or perform other validation logic
      console.log('Please select an option');
    }
  };

  // const fetchTicketData = () => {
  //   // Simulating an API call or data retrieval
  //   return {
  //     room: '103',
  //     date: '16/5/2023',
  //     time: '2:26 PM',
  //     examPeriod: '103',
  //     service: 'Password',
  //     Description:
  //       'the QR code is not working, the student needs a password to access the exam, please hurry up! Thank you in advance. One Piece is your uncle!',
  //   };
  // };

  let [examRoomData, setExamRoomData] = useState([]);
  // examRoomData = [{}];
  const token = localStorage.getItem('auth');
  const id = sessionStorage.getItem('ticketID');
  // const num = parseInt(id, 10);
  const url = `http://localhost:4000/support/ticket-details?id=${id}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
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
          // console.log(examRoomData);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, [token]);

  // useEffect(() => {
  //   console.log(examRoomData);
  // }, [examRoomData]);


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
              <button type='submit'>ٍSubmit</button>
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
