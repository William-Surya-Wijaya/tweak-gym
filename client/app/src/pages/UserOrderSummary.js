import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from "../assets/UserStyle.module.css";

function formatDate(dateString) {
  const options = { day: 'numeric', month: 'short' };
  const formattedDate = new Date(dateString).toLocaleString('id-ID', options);
  return formattedDate;
} 

function UserOrderSummary({sessionName, sessionStart, sessionEnd, sessionDate, sessionCapacity, sessionPrice, onClose}) {
  const navigate = useNavigate();
  const { idSession } = useParams();

  const [formData] = useState({
    user_email: idSession,
  });

  const backToGymSession = () => {
    navigate('/gym-session');
  };

  const validateAndProccess = () => {
    navigate('/');
  };

  return(
    <div className={`${styles.userOrderSummary}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>{sessionName}</div>
          <div className={`${styles.textContent}`}>{sessionStart.substring(0, 5)} - {sessionEnd.substring(0, 5)} / {formatDate(sessionDate)}</div>
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>TOTAL PAYMENT</div>
        <div className={`${styles.dashboardGallery} ${styles.membershipGallery}`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>{sessionPrice.toLocaleString()}</div>
              <div className={`${styles.textContent}`}>TWEAK POINTS</div>
            </div>
          </div>  
        </div>
        <div className={`${styles.item}`}>
        <div className={`${styles.row}`}>
          <div className={`${styles.buttonTransparent}`} onClick={onClose}>Cancel</div>
          <div className={`${styles.buttonLight}`} onClick={validateAndProccess}>Book Now</div>
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
  UserOrderSummary,
};