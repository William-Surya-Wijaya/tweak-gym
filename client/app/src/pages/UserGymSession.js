import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import styles from "../assets/UserStyle.module.css";
import { UserOrderSummary } from './UserOrderSummary';

function UserGymSession() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [dataSession, setDataSession] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3100/get-gym-session', {
          headers: {
            'x-api-key': '6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d',
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setDataSession(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return(
    <div className={`${styles.userDashboard}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>AVAILABLE SESSION</div>
          <div className={`${styles.textContent}`}>Here are the gym sessions available now.</div>
        </div>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
        AVAILABLE SESSION * AVAILABLE SESSION * AVAILABLE SESSION * AVAILABLE SESSION
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.gymSessionGalerry}`}>
        {console.log(dataSession)}
        {dataSession && Array.isArray(dataSession) && dataSession.length > 0 && (
            <div>
              <p>Data from session:</p>
              <ul>
                {dataSession.map((item, index) => (
                  <li key={index}>{JSON.stringify(item.session_name)}asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</li>
                ))}
              </ul>
            </div>
          )}
          <div className={`${styles.item}`}>
            <div className={`${styles.gymSessionGalerryContent}`}>
              <div className={`${styles.textTitle}`}>FIT CYCLE</div>
              <div className={`${styles.sessionDetail}`}>
                <div className={`${styles.time}`}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 09:00 - 28 / DEC</div>
                <div className={`${styles.capacity}`}>13 Slot</div>
              </div>
            </div>
            <div className={`${styles.galleryBanner}`}>
              <div className={`${styles.rotateText}`}>BOOK SEKARANG</div>
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
              <div className={`${styles.rotateText}`}>BOOK SEKARANG</div>
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
              <div className={`${styles.rotateText}`}>BOOK SEKARANG</div>
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
  UserGymSession,
};