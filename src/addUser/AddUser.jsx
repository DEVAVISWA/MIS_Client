import React, { useState } from "react";
import "./addUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    message: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        console.log("user created successfully");
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i>Back
      </Link>

      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm} action="">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="enter your name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="emai"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="enter your email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            onChange={inputHandler}
            name="message"
            autoComplete="off"
            placeholder="enter your message"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
