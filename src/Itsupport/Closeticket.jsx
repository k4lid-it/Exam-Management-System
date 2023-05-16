import React from 'react'
import './Closeticket.css'
export default function Closeticket() {
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
        <form action="">
          <div className="form-info">
            <div className="inputs">
              <input type="radio" name="resolve" id="resolve" />
              <label htmlFor="resolve">Resolve</label>
              <input type="radio" name="resolve" id="unresolve" />
              <label htmlFor="unresolve">Unresolve</label>
            </div>

            <br />

            <textarea name="" id="" rows="3" placeholder='Write a discription ... (Optional)'></textarea>

          </div>
          <div className="close">
            <button ><a href="">close ticket</a> </button>
          </div>

        </form>


      </div>

    </div>
  )
}
