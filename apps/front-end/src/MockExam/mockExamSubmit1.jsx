import React from "react";
import { Link } from "react-router-dom";
import io from 'socket.io-client';
import axios from 'axios';

const QRCodeGeneratorStudent1submit = () => {


    const socket = io('https://examportalseuserver.herokuapp.com/');
    const token = localStorage.getItem('auth');

    const postSubmit = () => {
        axios.post('https://examportalseuserver.herokuapp.com/student/mock-exam',
            {
                "studentID": "190084358",
                "subject": "ECOM101"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
    }

    if (sessionStorage.getItem("openExam") === "open") {
        return (
            <div>
                <h1>Hani Ghassan Darwicheh Successfully entered Exam</h1>
                <h1>
                    Keep your eyes on the paper and do not look at other students' papers
                </h1>
                <h1>Good Luck!</h1>
                <h1>Exam Duration: 2 hours</h1>
                <button><Link to="/mock-exam/student/submitted"
                    onClick={() => {
                        postSubmit();
                        socket.emit('server-sub', { "studentID": '190084358' });
                        sessionStorage.setItem('openExam', ' ');
                    }}
                > Submit Exam</Link></button>
            </div>
        );
    }
    else {
        window.location.href = "https://examportalseuserver.herokuapp.com/mock-exam/student/1"
    }
}



export default QRCodeGeneratorStudent1submit;