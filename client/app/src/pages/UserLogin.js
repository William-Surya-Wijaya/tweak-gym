import React, { useState } from 'react';
import styles from "../assets/UserStyle.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function UserLogin() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3100/login-tweak-account",
        formData,
        {
          headers: {
            "x-api-key":
              "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d",
          },
        }
      );

      if (response.status === 200) {
        // Lakukan sesuatu setelah permintaan berhasil
      }
    } catch (error) {
      // Tangani kesalahan
    }
  };

  return (
    <div className={`${styles.loginPage}`}>
      <div className={`${styles.gymLogo}`}>
        <img className={`${styles.topLogo}`} src="https://cdn.dribbble.com/users/6177297/screenshots/20141188/media/766dc94001d4ef551ba405786fbbb323.jpg?resize=400x0" alt="gym-logo"></img>
      </div>
      <div className={`${styles.textTitle}`}>TWEAK GYM</div>
      <div className={`${styles.subTitle}`}>Login</div>
      <div className={`${styles.textContent}`}>Login to your account.</div>

      <form name="login-form" onSubmit={handleSubmit}>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="user_email">Email:</label>
          <input
            type="text"
            id="user_email"
            name="user_email"
            required
            minLength="8"
            value={formData.user_email}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="user_password">Password:</label>
          <input
            type="password"
            id="password"
            name="user_password"
            required
            minLength="8"
            value={formData.user_password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={`${styles.buttonLight}`}>LOGIN</button>
      </form>
    </div>
  );
}

export {
  UserLogin,
};
