import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../auth/Login";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="cardcontainer">
            <main class="card">
              <div class="card-container">
                <div class="bio">
                  <h2>{user.username}</h2>
                  <p>Graphic Designer</p>
                </div>
                <ul class="data">
                  <li>
                    <span class="count">100</span>
                    <span class="type">Posts</span>
                  </li>
                  <li>
                    <span class="count">{user.email}</span>
                    <span class="type">email</span>
                  </li>
                  <li>
                    <span class="count">{user.phoneNumber}</span>
                    <span class="type">phoneNumber</span>
                  </li>
                </ul>
                <button className="cmn-btn" onClick={logout}>
                  Logout
                </button>
              </div>
            </main>
          </div>
        </>
      ) : (
        <div>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default Home;
