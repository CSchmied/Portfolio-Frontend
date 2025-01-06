// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Validation from "../scripts/LoginValidation";
import axios from "axios";

function Login() {
  // Values for the input fields
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState();

  // Handle Input
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  // Handle Submit
  // If no errors are found then call the backend using Axios
  const handleSubmit = async (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.email === "" && err.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message === "Success") {
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user in localStorage
            navigate("/");
            // alert('Success')
          } else {
            alert("Incorrect Username and/or Password!");
          }
        })
        .catch((res) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Helmet>
        <title>Login Page</title>
        {/* <link
          rel="icon"
          href="/img/favicon-16x16.png"
          sizes="16x16"
          data-react-helmet="true"
        /> */}
      </Helmet>
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email} </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password} </span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          <p>If you don't have an account then please create one</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
