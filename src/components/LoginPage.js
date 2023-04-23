import React from "react";
import "./index.css";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();
    
    function handleSubmit() {
        navigate("/marketplace");
    }
    
    return (
    <div>
      {/* <link rel="stylesheet" href="index.css" /> */}
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action>
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline" />
                <input type="email" required />
                <label htmlFor>Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline" />
                <input type="password" required />
                <label htmlFor>Password</label>
              </div>
              <div className="forget">
                <label htmlFor>
                  <input type="checkbox" />
                  Remember Me{" "}
                  <a href="#">
                    {" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; Forget Password
                  </a>
                </label>
              </div>
              <button onClick={handleSubmit}>Log in</button>
              <div className="register">
                <p>
                  Don't have a account <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
