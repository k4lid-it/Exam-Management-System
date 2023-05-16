import React from 'react'
import styles from "./Tickets.module.css"
export default function Tickets() {
  return (
    <>
    <div className={styles.containerTickets}>
    <table border=''>
    <caption>IT support tickets assignments</caption>
        <thead>
            <th>Room</th>
            <th>Date</th>
            <th>Time</th>
            <th>Exam period</th>
            <th>Service</th>
            <th>State</th>
        </thead>
        <tbody>
            <tr className={styles.bgRow}> 
                <td>103</td>
                <td>15/5/2023</td>
                <td>2:26 Pm</td>
                <td>2:00 - 4:00 Pm</td>
                <td>Pasword</td>
                <td className={styles.lastChildOne}>Open</td>
            </tr>
            
            <tr  className={styles.bgRow}> 
                <td>105</td>
                <td>15/5/2023</td>
                <td>2:14 Pm</td>
                <td>2:00 - 4:00 Pm</td>
                <td>Network</td>
                <td className={styles.lastChildTwo}>Open</td>
            </tr>
            
            <tr  className={styles.bgRow}> 
                <td>105</td>
                <td>16/5/2023</td>
                <td>2:10 Pm</td>
                <td>3:30 - 5:30 Pm</td>
                <td>Power Bank</td>
                <td className={styles.lastChildThree}>Closed</td>
            </tr>
            
        </tbody>
    </table>
    </div>
   
    </>
  )
}
