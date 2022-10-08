import React, { useState } from "react";
import "./form.scss"
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/config"
const Login = () => {
  const [err, setErr ] = useState(false);
  const navitive = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

try {
  await signInWithEmailAndPassword(auth, email, password)
  navitive("/")
} catch (err) {
  setErr(true);
}
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Đăng nhập thất bại</span>}

        </form>
        <p>You don't have an account?  <Link to="/register">Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;
