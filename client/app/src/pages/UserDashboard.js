import styles from "../assets/UserStyle.module.css";

function UserDashboard() {
  return(
    <div className={`${styles.UserDashboard}`}>
      <div className={`${styles.dashboardTitle}`}>
        <div className={`textWhite`}>Welcome to Tweak Gym website servic, brother</div>
      </div>
      <div className={`${styles.dashboardHeader}`}>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
      </div>
    </div>
  );
}

export {
  UserDashboard,
};