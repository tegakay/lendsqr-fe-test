import React, { useState } from "react";
import header from "../Group-logo.png";
import banner from "../pablo-sign-in.png";
import "./Login.scss";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [passwordShow, setPasswordShow] = useState<Boolean>(true);

  let navigate = useNavigate()

  const processCred = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //process Credentials to API
    console.log(e.target);
    //Redirect Page
    return navigate("/main");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target, e.target.name);
    const { name, value } = e.target;
    setLogin((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="header">
        <img src={header} className="header-icon" alt="lendsqr logo" />
      </div>
      <form className="main" onSubmit={processCred}>
        <div className="main-banner">
          <img src={banner} alt=""/>
        </div>
        <div className="login-form">
          <h1 className="welcome2"> Welcome!</h1>
          <p className="welcome">Enter details to login</p>
          <input
            type="text"
            placeholder="Email"
            className="form--input"
            name="username"
            onChange={handleChange}
            value={login.username}
            required
          />
          <input
            type={passwordShow ? "text" : "password"}
            placeholder="password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={login.password}
            required
          />
          <button
            className="input__show"
            type="submit"
            onClick={() => setPasswordShow((passwordShow) => !passwordShow)}
          >
            {passwordShow ? "HIDE" : "SHOW"}
          </button>
          <p className="forgot">Forgot Password</p>
          <button className="button submit">LOG IN</button>
        </div>
      </form>
    </div>
  );
};
