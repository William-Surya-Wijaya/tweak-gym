import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../assets/UserStyle.module.css";

function UserOrderSummary() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const { idSession } = useParams();

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
          <div className={`${styles.textTitle}`}>FIT CYCLE - {idSession} SESSION</div>
          <div className={`${styles.textContent}`}>START : 09:00 - 31 / DEC</div>
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>TOTAL PAYMENT</div>
        <div className={`${styles.dashboardGallery} ${styles.membershipGallery}`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>45.000</div>
              <div className={`${styles.textContent}`}>TWEAK POINTS</div>
            </div>
          </div>  
        </div>
        <div className={`${styles.item}`}>
        <div className={`${styles.row}`}>
          <div className={`${styles.buttonTransparent}`} onClick={backToGymSession}>Cancel</div>
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