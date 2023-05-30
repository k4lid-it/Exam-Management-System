import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import io from 'socket.io-client';



const QRCodeGeneratorStudent2submit = () => {

    const socket = io('https://examportalseuserver.herokuapp.com');
    const token = localStorage.getItem('auth');

    const postSubmit = () => {

        axios.post('https://examportalseuserver.herokuapp.com/student/mock-exam',
            {
                "studentID": "190053445",
                "subject": "IT244"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
    }
    if (sessionStorage.getItem("openExam") === 'open') {
        return (
            <div>
                <h1>Abdullah Mohammed Zain Abdulrahman Successfully entered Exam</h1>
                <h1>
                    Keep your eyes on the screen and do not look at other students' screens
                </h1>
                <h1>Good Luck!</h1>

                <h1>Exam Duration: 2 hours</h1>
                <button><Link to="/mock-exam/student/submitted"
                    onClick={() => {
                        postSubmit();
                        socket.emit('server-sub', { "studentID": '190053445' });
                        sessionStorage.setItem('openExam', ' ');
                    }}
                > Submit Exam</Link></button>
            </div>
        );
    }
    else {
        window.location.href = 'https://examportalseu.azurewebsites.net/mock-exam/student/2/'
    }
}

export default QRCodeGeneratorStudent2submit;