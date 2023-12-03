import React from 'react';
import styles from "../assets/UserStyle.module.css";

function UserLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
      //
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
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required minLength="8" />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required minLength="8" />
        </div>
        <button type="submit" className={`${styles.buttonLight}`}>LOGIN</button>
      </form>
    </div>
  );
}

export {
  UserLogin,
};
