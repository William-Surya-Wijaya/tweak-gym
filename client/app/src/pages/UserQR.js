import React from "react";
import styles from "../assets/UserStyle.module.css";
import QRCode from "qrcode.react";

function UserQR({ sessionId, onClose }) {
  return (
    <div className={`${styles.userOrderSummary}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>Booking QR</div>
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.qrPosition}`}>
          <QRCode value={sessionId ? sessionId : "empty"} />
        </div>
        <div className={``}>
          {sessionId}
        </div>
        <div className={`${styles.item}`}>
          <div className={`${styles.buttonTransparent}`} onClick={onClose}>
            Close
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
  UserQR,
};
