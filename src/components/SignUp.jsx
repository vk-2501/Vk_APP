import React from "react";
import "./css/SignIn.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  let history = useHistory();
  const [name, nameSet] = useState("");
  const [password, passwordSet] = useState("");
  const [email, emailSet] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async () => {
    history.push("/signin");
    try {
      await axios.post("/api/user/signup", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirm,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signin_logo"
          src="https://raw.githubusercontent.com/Jassi10000/AlanEats/main/frontend/src/images/AlanEatsLogo.png?token=GHSAT0AAAAAABRLSBBNI2JBVQOF3XCZXQREYRI3J6A
"
          alt="alan eats logo"
        />
      </Link>
      <div className="signin_container">
        <h1>Sign-up</h1>
        <form>
          <h5>Username</h5>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => nameSet(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="your Email"
            onChange={(e) => emailSet(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) => passwordSet(e.target.value)}
          />

          <h5>Confirm-Password</h5>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            className="sign_inButton"
            onClick={() => {
              handleSignup();
            }}
          >
            Sign up
          </button>
        </form>
        <p>
          By signing-in you agree to the Alan Eats conditions. Please see our
          Privacy Notice
        </p>
      </div>
    </div>
  );
};

export default SignUp;
