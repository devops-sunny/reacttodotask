import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Home from "../home/Home";

const defaultValues = {
  username: "",
  password: "",
  email: "",
  phoneNumber: "",
  address: "",
};

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(defaultValues);
  const [error, setError] = useState("");
  const users = useSelector((state) => state.auth.registerUserData);

  const { username, password, email, phoneNumber, address } = useMemo(
    () => formData,
    [formData]
  );
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !email || !phoneNumber || !address) {
      setError("Input is required.");
    } else {
      const user = users.find((u) => u.username === username);
      if (user) {
        setError("Username already exists.");
      } else {
        formData.id = Date.now();
        dispatch(registerUser(formData));
        setFormData(defaultValues);
        setError("");
        navigate("/");
      }
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <Home />
      ) : (
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
                  <h2>Sign in</h2>
                  <p>Enter Your Details Below.</p>
                </div>
                <div className="form-group">
                  <div className="mar-btn">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mar-btn">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mar-btn">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mar-btn">
                    <input
                      type="number"
                      name="phoneNumber"
                      min="1"
                      max="10"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mar-btn">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="check-forgotpass">
                    <div className="custom-checkbox"></div>
                    <Link to="/" className="forgot-pass">
                      <span className="dark-color">Not a member?</span> Login
                    </Link>
                  </div>
                </div>
                {error}
                <div className="form-group btn-row">
                  <button className="cmn-btn" onClick={handleSubmit}>
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default SignupForm;
