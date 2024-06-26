import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SolidIcon from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useState } from "react";

export default function LoginForm({ handleLogin, handleRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    handleLogin(e, username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <Fragment>
      <div className="login-container">
        <form onSubmit={loginUser}>
          <div className="group-header">ROPA</div>
          <div className="group">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg> */}

            <FontAwesomeIcon className="icon" icon={SolidIcon.faUser} />

            <input
              type="text"
              id="username"
              placeholder="ชื่อผู้ใช้"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="group">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg> */}

            <FontAwesomeIcon className="icon" icon={SolidIcon.faLock} />

            <input
              type="password"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="group-btn">
            <button className="login-btn" type="submit">
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => {
                handleRegister();
              }}
              className="login-btn"
              type="button"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
