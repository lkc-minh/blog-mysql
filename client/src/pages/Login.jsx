import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [inputs, setInputs] = useState({
        username: "",
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
            const res = await axios.post("http://localhost:1998/api/auth/login", inputs);
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    onChange={handleChange}
                    name="username"
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    name="password"
                />
                <button>Login</button>
                {error && <p>{error}</p>}
                <span>
                    Don't you have an account? <Link to={"/register"}>Register</Link>
                </span>
            </form>
        </div>
    );
}

export default Login;
