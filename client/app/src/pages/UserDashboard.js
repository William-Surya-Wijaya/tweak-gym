import styles from "../assets/UserStyle.module.css";
import React, { useEffect } from 'react';

function UserDashboard() {
  return (
    <div className={`${styles.userDashboard}`}>
      <div className={`${styles.dashboardHeader}`}>
        <div className={`${styles.dashboardSubTitle}`}>
          <div className={`${styles.textTitle}`}>JOIN US !</div>
          <div className={`${styles.textContent}`}>Ready for a fitness revolution? Join our gym and be a part of a vibrant, motivated community.</div>
          <div className={`${styles.row}`}>
            <div className={`${styles.buttonLight}`}>Start Now</div>
            <div className={`${styles.buttonTransparent}`}>Learn More</div>
          </div>
        </div>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
        CONVINIENT LOCATION & SCHEDULE * DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFESSIONAL TRAINERS
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>WHY CHOOSE US</div>
        <div className={`owl-carousel`}>
          <div className={`item`}><img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img></div>
          <div className={`item`}><img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img></div>
          <div className={`item`}><img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img></div>
        </div>
      </div>
    </div>
  );
}

export { UserDashboard };