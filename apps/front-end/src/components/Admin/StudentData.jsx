import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Itsupport/ITtickets.css';
import HeaderAdmin from '../HeaderAdmin';

function StudentData() {


    const [studentInfo, setStudentinfo] = useState([]);
    const [errorInfo, setError] = useState(false);
    const [textInputValue, setTextInputValue] = useState('')
    const token = localStorage.getItem('auth');

    const handleTextInputChange = (event) => {
        setTextInputValue(event.target.value);
    };



    let id = textInputValue;

    function handleSubmit() {
        fetch(`http://localhost:4000/admin/student-details?id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === "Unauthorized") { window.location.href = "../security-stop"; }
                else if (data.message === "Internal server error") { setError(true); setStudentinfo([]) }
                else {
                    setStudentinfo(data);
                    console.log(data)
                    setError(false);
                }
            })
    }


    // Map over the IT support ticket data and create a table row for each ticket
    const DataRows = Array.isArray(studentInfo) ? studentInfo.map((info) => (
        <tr key={info.id}>
            <td>{info.course}</td>
            <td>{info.subject}</td>
            <td>{info.room}</td>
            <td>{info.seat}</td>
            <td>{info.time}</td>

        </tr>
    )) : [];
    const Name = Array.isArray(studentInfo) && studentInfo.length > 0 ? (
        <h1>{studentInfo[0].name}</h1>
    ) : null;



    return (
        <div>
            <HeaderAdmin />

            <div className='ITsupportPage-container'>
                {<div className="text-input-container">
                    <input
                        type="text"
                        value={textInputValue}
                        onChange={handleTextInputChange}
                        placeholder="Enter The student's ID"
                    />
                    <div className="buttons">
                        <button className="btn" onClick={handleSubmit}>
                            Check
                        </button>
                    </div>
                </div>
                }
                <h1>{Name}</h1>

                {errorInfo && <h2>The Student ID is incorrect, please try again</h2>}
                {console.log(errorInfo)}

                {studentInfo.length > 0 && <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Subject</th>
                            <th>Room</th>
                            <th>Seat</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>{DataRows}</tbody>
                </table>}

            </div>
        </div>
    );
}

export default StudentData;
