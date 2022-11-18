import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log({ res });
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  console.log(inputs);

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          required
          type="text"
          placeholder="username"
          name="username"
          value={inputs.username}
        />
        <input
          onChange={handleChange}
          required
          type="email"
          placeholder="email"
          name="email"
          value={inputs.email}
        />
        <input
          onChange={handleChange}
          required
          type="password"
          placeholder="password"
          name="password"
          value={inputs.password}
        />
        <button>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
