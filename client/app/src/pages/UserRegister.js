import React from 'react';
import styles from "../assets/UserStyle.module.css";

function UserRegister() {
  const handleSubmit = (event) => {
    event.preventDefault();
      //
  };

  const handlePasswordConfirmation = (event) => {
    const password = document.getElementById('password').value;
    const passwordConfirmation = event.target.value;

    if (password !== passwordConfirmation) {
      event.target.setCustomValidity('Passwords do not match');
    } else {
      event.target.setCustomValidity('');
    }
  };

  return (
    <div className={`${styles.loginPage}`}>
      <div className={`${styles.gymLogo}`}>
        <img className={`${styles.topLogo}`} src="https://cdn.dribbble.com/users/6177297/screenshots/20141188/media/766dc94001d4ef551ba405786fbbb323.jpg?resize=400x0" alt="gym-logo"></img>
      </div>
      <div className={`${styles.textTitle}`}>TWEAK GYM</div>
      <div className={`${styles.subTitle}`}>Register</div>
      <div className={`${styles.textContent}`}>Register your account.</div>

      <form name="login-form" onSubmit={handleSubmit}>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required minLength="8" />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required minLength="8" />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required minLength="8" />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password-confirmation">Password Confirmation:</label>
          <input
            type="password"
            id="password-confirmation"
            name="password-confirmation"
            required
            minLength="8"
            onChange={handlePasswordConfirmation}
          />
        </div>
        <button type="submit" className={`${styles.buttonLight}`}>LOGIN</button>
      </form>
    </div>
  );
}

export {
  UserRegister,
};
