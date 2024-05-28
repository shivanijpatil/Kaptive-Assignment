import React, { useState } from "react";
import "./LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, background } from '@chakra-ui/react';

const LoginSignup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  const handleSignup = async () => {
    let isproceed = true;
    let errormessage = "Please enter the required feilds";
    if (action === "Sign Up") {
      if (name === null || name === "" || password === null || password === "" || email === null || email === "") {
        alert(errormessage);
        console.log(errormessage);
      }
      else {
        try {
          const response = await axios.post(
            "https://mock-api-plse-2.onrender.com/users",
            {
              "name": name,
              "email": email,
              "password": password

            }
          );
          console.log("response.data=" + response.status);
          if (response.status == 201) {
            alert(" User Signup Successful")
          }
          const token = response.data.token;
        } catch (error) {
          console.error("Login failed:", error);
          toast.error("Login failed. Please check your credentials.");
        }
      }
    }
  };

  const handleLogin = async () => {
    let errormessage = "Please enter the required fields";
    if (action === "Login") {
      if (password === "" || email === "") {
        alert(errormessage);
        console.log(errormessage);
      }
      else {
        try {
          const response = await axios.get(
            `https://mock-api-plse-2.onrender.com/users?email=${email}`

          );
          console.log(response.data);
          if (!response.data || response.data.length === 0) {
            alert("Email-id not valid");
            return;
          }
          else {
            if (response.status === 200) {
              const userData = response.data[0];
              const userPassword = userData.password;
              if (userPassword === password) {
                alert("User Login Successful")
                navigate("/Dashboard");
                return name, email;;

              }
              else {
                alert("Login failed. Please check your credentials.");
              }
              // const userData = response.data[0];

            }

          }
          const token = response.data.token;
          // Do something with the token
        } catch (error) {
          console.error("Login failed:", error);
          toast.error("Login failed. Please check your credentials.");
        }
      }
    }
  };

  return (

    <div className="container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Forgot password ? <span>Click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            handleSignup();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
            handleLogin();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;



