import React from 'react'
import { Link } from 'react-router-dom'
import './Acceptticket.css'
export default function Acceptticket() {
  return (
    <div className='container'>
      <div className="item">
        <h2>it support ticket</h2>
        <p>ticket information:</p>

        <table className='.tablee'>
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

        </table>
        <div className="buttons">
          <Link to=""><button>accept</button></Link>
          <button>cancel</button>
        </div>
      </div>

    </div>
  )
}
