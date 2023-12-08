import styles from "../assets/UserStyle.module.css";

function UserMember(sessionUser) {
  return(
    <div className={`${styles.userDashboard}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>WELCOME TWEAKERS !</div>
          <div className={`${styles.textContent}`}>Your membership will be end at 31 December 2023, make sure to use the remaining time to exercise.</div>
          {/* <div className={`${styles.row}`}>
            <div className={`${styles.buttonLight}`}>Start Now</div>
            <div className={`${styles.buttonTransparent}`}>Learn More</div>
          </div> */}
        </div>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
        VIP MEMBERSHIP * VIP MEMBERSHIP * VIP MEMBERSHIP * VIP MEMBERSHIP
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>YOUR BENEFIT</div>
        <div className={`${styles.dashboardGallery} ${styles.membershipGallery}`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>ONE FREE CLASS PER DAY</div>
              <div className={`${styles.textContent}`}>You can book any class once per day freely.</div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>FREE DRINK WATER REFILL</div>
              <div className={`${styles.textContent}`}>You can refill your drink water freely.</div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>MEMBER ROOM</div>
              <div className={`${styles.textContent}`}>Get access to the members-only break room.</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <div>&copy; 2023 Tweak Gym. All rights reserved.</div>
      </div>
    </div>
  );
}

export {
  UserMember,
};