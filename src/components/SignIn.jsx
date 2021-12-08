import React from "react";
import { Link } from "react-router-dom";
import "./css/SignIn.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  let history = useHistory();
  const [password, passwordSet] = useState("");
  const [email, emailSet] = useState("");
  const [userData, setUserData] = useState("");

  const handleSignin = async () => {
    history.push("/");
    try {
      let data = await axios.post("/api/user/login", {
        email: email,
        password: password,
      });
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin_logo"
          src="https://raw.githubusercontent.com/Jassi10000/AlanEats/main/frontend/src/images/AlanEatsLogo.png?token=ANRAM26BSH73Q5VUXQ23MRLBXHH32"
          alt="alan eats logo"
        />
      </Link>
      <div className="signin_container">
        <h1>Sign-in</h1>
        <form>
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

          <button
            className="sign_inButton"
            onClick={() => {
              handleSignin();
            }}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Alan Eats conditions. Please see our
          Privacy Notice
        </p>
        <Link to="/signup">
          <button className="sign_inRegisterButton">
            Create Your Alan Eats Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
