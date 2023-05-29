import React from "react";
import { Link } from "react-router-dom";

const QRCodeGeneratorStudent1submit = () => {
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
                        sessionStorage.setItem('openExam', ' ');
                    }}
                > Submit Exam</Link></button>
            </div>
        );
    }
    else {
        window.location.href = "http://localhost:3000/mock-exam/student/1"
    }
}



export default QRCodeGeneratorStudent1submit;