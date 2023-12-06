import React, { useEffect, useRef, useState } from "react";
import styles from "../assets/UserStyle.module.css";
import { UserOrderSummary } from './UserOrderSummary';
import { SessionCard } from './components/SessionCard';
import axios from "axios";

function UserGymSession(props) {
  const [gymOrderModal, setShowModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleOpenModal = (sessionData) => {
    setSelectedSession(sessionData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [dataSession, setDataSession] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    // console.log('User Session:', props.userSession);

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/get-gym-session", {
          headers: {
            "x-api-key":
              "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d",
            Authorization: `${props.userSession.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setDataSession(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.userSession]);

  return (
    <div className={`${styles.userDashboard}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>AVAILABLE SESSION</div>
          <div className={`${styles.textContent}`}>
            Here are the gym sessions available now.
          </div>
        </div>
        <img
          src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"
          alt="gymimage"
        ></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
          AVAILABLE SESSION * AVAILABLE SESSION * AVAILABLE SESSION * AVAILABLE
          SESSION
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.gymSessionGalerry}`}>
          {dataSession &&
            dataSession.dataGymSession &&
            Array.isArray(dataSession.dataGymSession) &&
            dataSession.dataGymSession.length > 0 &&
            dataSession.dataGymSession.map((item, index) => (
              <SessionCard
                key={index}
                sessionName={item.session_name}
                sessionStart={item.session_start}
                sessionEnd={item.session_end}
                sessionDate={item.session_date}
                sessionCapacity={item.session_capacity}
                sessionPrice={item.session_price}
                onClick={handleOpenModal}
                onClose={handleCloseModal}
              />
            ))}
        </div>
      </div>
      {gymOrderModal && selectedSession && (
        <UserOrderSummary
          sessionName={selectedSession.sessionName}
          sessionStart={selectedSession.sessionStart}
          sessionEnd={selectedSession.sessionEnd}
          sessionDate={selectedSession.sessionDate}
          sessionCapacity={selectedSession.sessionCapacity}
          sessionPrice={selectedSession.sessionPrice}
          onClose={handleCloseModal}
        />
      )}
      <div className={`${styles.footer}`}>
        <div>&copy; 2023 Tweak Gym. All rights reserved.</div>
      </div>
    </div>
  );
}

export {
  UserGymSession,
};