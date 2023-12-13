import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from "../assets/UserStyle.module.css";

function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long' };
  const date = new Date(dateString);
  const year = date.getFullYear();
  const formattedDate = date.toLocaleString('id-ID', options);
  return `${formattedDate} ${year}`;
}

function UserOrderSummary({sessionName, sessionStart, sessionEnd, sessionDate, sessionCapacity, sessionPrice, onClose}) {
  const navigate = useNavigate();
  const { idSession } = useParams();

  const [formData] = useState({
    user_email: idSession,
  });

  const validateAndProccess = () => {
    navigate('/');
  };

  return(
    <div className={`${styles.userOrderSummary}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>Order Summary</div>
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>{sessionName}</div>
        <div className={`${styles.textContent}`}>Your order <b>{sessionName}</b><br></br><b>{sessionStart.substring(0, 5)} - {sessionEnd.substring(0, 5)}</b> at <b>{formatDate(sessionDate)}</b>.<br></br><br></br>Please arrive 10 minutes earlier.</div>
        <div className={`${styles.dashboardGallery} ${styles.membershipGallery}`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.col}`}>
                <div className={`${styles.topProfile}`}><img className={`${styles.topLogo}`} src="https://cdn.dribbble.com/users/6177297/screenshots/20141188/media/766dc94001d4ef551ba405786fbbb323.jpg?resize=400x0" alt="gym-logo"></img></div>
              </div>
              <div className={`${styles.col}`}>
                <div className={`${styles.textTitle}`}>{sessionName}</div>
                <div className={`${styles.textContent}`}>{sessionPrice.toLocaleString()} Tweak Points</div>
              </div>
            </div>
          </div>  
        </div>
        <div className={`${styles.item}`}>
          <div className={`${styles.buttonLight}`} onClick={validateAndProccess}>Proceed to Payment</div>
          <div className={`${styles.buttonTransparent}`} onClick={onClose}>Cancel Order</div>
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