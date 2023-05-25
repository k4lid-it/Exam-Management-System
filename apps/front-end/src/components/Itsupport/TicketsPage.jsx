import React from 'react'
import styles from "./Tickets.module.css"


export default function Tickets() {
  return (
    
    <div className={styles.containerTickets}>
    <table border=''>
    <caption>Assigned IT support tickets:</caption>
        <thead>
            <th>Room</th>
            <th>Date</th>
            <th>Time</th>
            <th>Exam period</th>
            <th>Service</th>
        </thead>
        <tbody>
            <tr className=""> 
                <td>103</td>
                <td>15/5/2023</td>
                <td>2:26 Pm</td>
                <td>2:00 - 4:00 Pm</td>
                <td>Pasword</td>
            </tr>
            
            <tr  className=""> 
                <td>105</td>
                <td>15/5/2023</td>
                <td>2:14 Pm</td>
                <td>2:00 - 4:00 Pm</td>
                <td>Network</td>
            </tr>
            
            <tr  className=""> 
                <td>105</td>
                <td>16/5/2023</td>
                <td>2:10 Pm</td>
                <td>3:30 - 5:30 Pm</td>
                <td>Power Bank</td>
            </tr>
            
        </tbody>
    </table>
    </div>
   
  )
}
