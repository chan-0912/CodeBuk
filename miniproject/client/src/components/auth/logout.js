import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css"

const Logout = () => {
  //promises
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:1337/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        // navigate("/login",{replace:true});
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="logout">
      <div className="content">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for visiting our website. </p>
            <p>you are logged out successfully </p>
            <button class="go-home">Login</button>
          </div>
          {/* <div class="footer-like">
            <p>
              Email not received?
              <a href="#">Click here to send again</a>
            </p>
          </div> */}
        </div>
      </div>

      {/* <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"> */}
    </div>
  );
};

export default Logout;
