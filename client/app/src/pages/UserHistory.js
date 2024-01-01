import styles from "../assets/UserStyle.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserHistory() {
  const navigate = useNavigate();   
  const [showQR, setShowQR] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleShowQR = (sessionName) => {
    setSelectedSession(sessionName);
    setShowQR(true);
  };

  const handleCloseQR = () => {
    setShowQR(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/cek-session", {
          headers: {
            "x-api-key":
              "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d",
          },
          withCredentials: true,
        });
        if (response.status == 404) {
          const data = response.data;
          console.log(data);
        }else{
          throw new Error("Error");
        }
      } catch (error) {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  return(
    <div className={`${styles.userDashboard}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>YOUR SESSION HISTORY</div>
          <div className={`${styles.textContent}`}>Here are the gym sessions that you booked.</div>
        </div>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
        BOOKED SESSION HISTORY * BOOKED SESSION HISTORY * BOOKED SESSION HISTORY * BOOKED SESSION HISTORY
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.gymSessionGalerry}`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.gymSessionGalerryContent}`}>
              <div className={`${styles.textTitle}`}>FIT CYCLE</div>
              <div className={`${styles.sessionDetail}`}>
                <div className={`${styles.time}`}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 09:00 - 28 / DEC</div>
                <div className={`${styles.capacity}`}>13 Slot</div>
              </div>
            </div>
            <div className={`${styles.galleryBanner}`}>
              <div className={`${styles.rotateText}`}>LIHAT TIKET QR</div>
            </div>
            <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.gymSessionGalerryContent}`}>
              <div className={`${styles.textTitle}`}>BODY COMBAT</div>
              <div className={`${styles.sessionDetail}`}>
                <div className={`${styles.time}`}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 09:00 - 28 / DEC</div>
                <div className={`${styles.capacity}`}>24 Slot</div>
              </div>
            </div>
            <div className={`${styles.galleryBanner}`}>
              <div className={`${styles.rotateText}`}>LIHAT TIKET QR</div>
            </div>
            <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.gymSessionGalerryContent}`}>
              <div className={`${styles.textTitle}`}>ZUMBA</div>
              <div className={`${styles.sessionDetail}`}>
                <div className={`${styles.time}`}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 09:00 - 28 / DEC</div>
                <div className={`${styles.capacity}`}>25 Slot</div>
              </div>
            </div>
            <div className={`${styles.galleryBanner}`}>
              <div className={`${styles.rotateText}`}>LIHAT TIKET QR</div>
            </div>
            <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
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
  UserHistory,
};