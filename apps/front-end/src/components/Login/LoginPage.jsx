import React, { useState } from "react";
import "./LoginPage.css";
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

    axios.post('http://localhost:4000/auth/login', {
      email: username,
      password: password
    })
      .then(response => {

        //// Save the token in a cookie
        //// document.cookie = `authcookie=${response.data.access_token
        ////   }; expires=130; path=/`;

        //Save the token in a local storage
        localStorage.setItem('auth', response.data.access_token);
        document.location.href = "Invigilator-home";
      })
      .catch(error => {
        // Log the error
        console.error(error);
      });

  }
    ;

  return (
    <div className="login-page">
      <div className="login-form">
        <img src="seuLogo.png" alt="Logo" className="logo" />
        <h1 className="title">Login using SEU account</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
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
