import React from "react";
import logo from "../logo.svg";
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <img src={logo} alt="" width="600" />
    <Link to="/sign-up">Sign Up</Link>
    <button>Login</button>
  </div>
);

export default Home;
