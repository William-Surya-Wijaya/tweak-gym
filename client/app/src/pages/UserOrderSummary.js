import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../assets/UserStyle.module.css";
import axios from "axios";

function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long' };
  const date = new Date(dateString);
  const year = date.getFullYear();
  const formattedDate = date.toLocaleString('id-ID', options);
  return `${formattedDate} ${year}`;
}

function UserOrderSummary({sessionId, sessionName, sessionStart, sessionEnd, sessionDate, sessionCapacity, sessionPrice, onClose}) {
  const navigate = useNavigate();

  console.log(sessionId);

  const validateAndProccess = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3100/booking-session",
        {
          id_gym_session: sessionId,
          net_amount: sessionPrice,
          purchase_date: new Date().toISOString().split("T")[0],
          transaction_status: "PAID",
        },
        {
          headers: {
            "x-api-key":
              "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Order successful!");
      }
    } catch (error) {
      console.error("Error ordering session:", error);
      if (error.response && error.response.status === 404) {
        console.log("Session not found");
      } else {
        navigate("/login");
      }
    }
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