import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(defaultValues);
  const [error, setError] = useState("");

  const users = useSelector((state) => state.auth.registerUserData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const { username, password } = formData;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        dispatch(loginUser(user));
        navigate("/home");
        setError("");
      } else {
        setError("Invalid Crendtials, Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="loginFormMain">
        <div className="fullBgImg" />
        <div className="welcome">
          <span>L</span>ogo
        </div>
        <div className="ct-row">
          <div className="left-col"></div>
          <form>
            <div className="form-main">
              <div className="title">
                <h2>Login</h2>
                <p>Enter Your Details Below.</p>
              </div>
              <div className="form-group">
                <div className="mar-btn">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mar-btn">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="check-forgotpass">
                  <div className="custom-checkbox"></div>

                  <a href="/signup">
                    <span className="dark-color">New user?</span> Signup
                  </a>
                </div>
              </div>
              {error}
              <div className="form-group btn-row">
                <button className="cmn-btn" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
