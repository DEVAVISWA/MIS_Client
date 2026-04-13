import React, { use, useEffect, useState } from "react";
import "./update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    message: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
      .then((response) => {
        // console.log("user created successfully");
        toast.success(response.data.message, { position: "top-right" });
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

      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm} action="">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
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
            value={user.email}
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
            value={user.message}
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

export default UpdateUser;
