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
        "http://localhost:3000/register-tweak-account",
        formData,
        {
          headers: {
            "x-api-key":
              "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d", // Gantilah dengan nilai API key yang sesuai
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
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            minLength="8"
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            minLength="8"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            minLength="8"
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
