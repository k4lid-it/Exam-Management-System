import React from "react";
import { Link } from "react-router-dom";

const QRCodeGeneratorStudent1submit = () => {
    return (
        <div>
        <h1>Hani Ghassan Darwicheh Successfully entered Exam</h1>
        <h1>
            Keep your eyes on the paper and do not look at other students' papers
        </h1>
        <h1>Good Luck!</h1>
        <h1>Exam Duration: 2 hours</h1>
        <Link to="/mock-exam/student/submitted"> Submit Exam</Link>
        </div>
    );
    }

export default QRCodeGeneratorStudent1submit;