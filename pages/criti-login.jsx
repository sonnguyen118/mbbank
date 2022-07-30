import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [account, setAcount] = useState("");
  const [password, setPassword] = useState("");
  const [loginfalse, setLoginfalse] = useState(false);
  const user = [
    {
      account: "root",
      password: "anhyeuem8888",
    },
  ];
  const handleLogin = () => {
    if (account === user[0].account && password === user[0].password) {
      localStorage.setItem("account", JSON.stringify(account));
      localStorage.setItem("password", JSON.stringify(password));

      router.push("/admin");
    } else {
      setLoginfalse(true);
    }
  };

  return (
    <div className="container-login">
      <video autoPlay muted loop id="myVideo">
        <source src="/4x/video_background.mp4" type="video/mp4" />
      </video>
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={(event) => setAcount(event.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={handleLogin}
            >
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a className="message-text" href="#">
                  Forgot your password
                </a>
              </div>
            </div>
          </form>
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
