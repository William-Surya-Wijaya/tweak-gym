import styles from "../assets/UserStyle.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* eslint-disable */

function UserHistory({}) {
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

  const [dataHistory, setDataHistory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3100/history-booking",
          {
            headers: {
              "x-api-key":
                "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d",
            },
            withCredentials: true,
          }
        );

        const data = response.data;
        console.log(data);
        setDataHistory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          {dataHistory &&
            dataHistory.dataGymSession &&
            Array.isArray(dataHistory.dataGymSession) &&
            dataHistory.dataGymSession.length > 0 &&
            dataHistory.dataGymSession.map((item, index) => (
              <HistoryCard
                key={index}
                sessionId={item.id_gym_session}
                sessionName={item.session_name}
                sessionStart={item.session_start}
                sessionEnd={item.session_end}
                sessionDate={item.session_date}
                sessionCapacity={item.session_capacity}
                onClick={handleOpenModal}
                onClose={handleCloseModal}
              />
            ))}
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