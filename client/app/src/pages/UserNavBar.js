import styles from "../assets/UserStyle.module.css";
function UserNavBar() {
  return(
    <div className={`${styles.navbarContainer}`}>
      <div className={`${styles.navbar} ${styles.textWhite}`}>
        <div className={`${styles.navButton} ${styles.active}`}>Home</div>
        <div className={`${styles.navButton}`}>Booking</div>
        <div className={`${styles.qrButton} ${styles.bgLight}`}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg></div>
        <div className={`${styles.navButton}`}>History</div>
        <div className={`${styles.navButton}`}>Poin</div>
      </div>
      <div className={`${styles.navbarBG}`}>
        
      </div>
    </div>
  );
}

export {
  UserNavBar,
};