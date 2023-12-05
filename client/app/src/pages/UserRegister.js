import React, { useState } from "react";
import styles from "../assets/UserStyle.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function UserRegister() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
    user_name: "",
    user_phonenumb: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3100/register-tweak-account",
        formData
      );

      if (response.status === 200) {
        alert("success");
      }
    } catch (error) {
      // Tangani kesalahan
    }
  };

  const handlePasswordConfirmation = (event) => {
    const password = document.getElementById("password").value;
    const passwordConfirmation = event.target.value;

    if (password !== passwordConfirmation) {
      event.target.setCustomValidity("Passwords do not match");
    } else {
      event.target.setCustomValidity("");
    }
  };

  return (
    <div className={`${styles.loginPage}`}>
      <div className={`${styles.gymLogo}`}>
        <img
          className={`${styles.topLogo}`}
          src="https://cdn.dribbble.com/users/6177297/screenshots/20141188/media/766dc94001d4ef551ba405786fbbb323.jpg?resize=400x0"
          alt="gym-logo"
        ></img>
      </div>
      <div className={`${styles.textTitle}`}>TWEAK GYM</div>
      <div className={`${styles.subTitle}`}>Register</div>
      <div className={`${styles.textContent}`}>Register your account.</div>

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
        <div className={`${styles.formGroup}`}>
          <label htmlFor="user_email">Phone Number:</label>
          <input
            type="text"
            id="user_phonenumb"
            name="user_phonenumb"
            required
            minLength="8"
            value={formData.user_phonenumb}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="user_name">Username:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            minLength="8"
            value={formData.user_name}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password-confirmation">Password Confirmation:</label>
          <input
            type="password"
            id="password-confirmation"
            name="password_confirmation"
            required
            minLength="8"
            onChange={handlePasswordConfirmation}
          />
        </div>
        <button type="submit" className={`${styles.buttonLight}`}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export { UserRegister };
