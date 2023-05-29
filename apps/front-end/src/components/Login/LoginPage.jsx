import React, { useState } from "react";
import "./LoginPage.css";
import axios from 'axios';
import Joi from "joi";
function Login() {
  const [error, seterror] = useState(false);
  const [userEmail, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  let [errorsList, setErrorsList] = useState([]);
  function validateForm() {
    let schema = Joi.object({
      userEmail: Joi.string().email({ tlds: { allow: false } }).required(),
      password: Joi.string().required()
    })
    return schema.validate({ userEmail, password }, { abortEarly: false })
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordClick = (event) => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validateResult = validateForm()
    if (validateResult.error == null) {
      axios.post('http://localhost:4000/auth/login', { email: userEmail, password: password })
        .then(response => {

          if (response.data.info.userType === 'invigilator') {
            //Save the token in a local storage
            localStorage.setItem('auth', response.data.access_token);
            localStorage.setItem('type', response.data.info.userType);
            window.location.href = '/Invigilator-home';
          }
          else if (response.data.info.userType === 'support') {
            localStorage.setItem('auth', response.data.access_token);
            localStorage.setItem('type', response.data.info.userType);
            window.location.href = '/IT-Support/Assigned-Tickets'
          }
          else if (response.data.info.userType === 'admin') {
            localStorage.setItem('auth', response.data.access_token);
            localStorage.setItem('type', response.data.info.userType);
            window.location.href = '/Admin-home'
          }
        })
        .catch(error => {
          seterror(true);
          console.error(error);
        });
    }
    else {
      setErrorsList(validateResult.error.details)
      console.log(validateResult.error.details);
    }
    // fetch('http://localhost:4000/auth/login', {
    //   method: 'POST',
    //   // headers: {
    //   //   // Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    //   //   'Content-Type': 'application/json'
    //   // },

    //   body: {
    //     "email": "h.alzahrani@seu.edu.sa",
    //     "password": "dan-2023"
    //   }
    // })
    //   .then(response => response.text())
    //   .then(data => {
    //     console.log("Token: " + data)
    //     document.cookie = `authcookie=${data}; expires=130; path=/`;
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });



  }
    ;

  return (
    <div className="login-page">
      <div className="login-form">
        <img src="seuLogo.png" alt="Logo" className="logo" />
        <p className="portal-title">SEU Exam Portal</p>
        <h1 className="title">Login using SEU account</h1>
        {error && <h2>The username or password is incorrect, please try again</h2>}

        {errorsList.map((erroor, i) =>
          <div className="alert alert-danger text-danger" key={i}>
            {erroor.message}
          </div>)}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Useremail</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={userEmail}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div
                className="show-password"
                onClick={handleShowPasswordClick}
              >
                Show
              </div>
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
