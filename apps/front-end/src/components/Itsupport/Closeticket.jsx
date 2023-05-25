import React, { useState } from 'react';
import './Closeticket.css';
import HeaderNonAdmin from '../HeaderNonAdmin';

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
              <td className='tdOne'>room:</td>
              <td className='tdTwo'>103</td>
            </tr>
            <tr>
              <td className='tdOne'>date:</td>
              <td className='tdTwo'>16/5/2023</td>
            </tr>
            <tr>
              <td className='tdOne'>time:</td>
              <td className='tdTwo'>2:26PM</td>
            </tr>
            <tr>
              <td className='tdOne'>exam period:</td>
              <td className='tdTwo'>103</td>
            </tr>
            <tr>
              <td className='tdOne'>service:</td>
              <td className='tdTwo'>password</td>
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
                  value='unresolved'
                  checked={selectedOption === 'unresolved'}
                  onChange={handleOptionChange}
                  required
                />
                unresolved
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
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
