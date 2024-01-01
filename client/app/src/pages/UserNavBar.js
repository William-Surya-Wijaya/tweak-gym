import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../assets/UserStyle.module.css";
import axios from "axios";


function UserNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [dataMember, setDataMember] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3100/user-member-data",{
            withCredentials: true,
          }
        );
        if (response.status === 404) {
          navigate("/login"); 
          return;
        }
        const data = response.data;
        console.log(data.message);
        setDataMember(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/login"); 
      }
    };

    fetchData();
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleBookingClick = () => {
    navigate('/gym-session');
  };

  const handleQrButtonClick = () => {
    if(!dataMember){
      navigate('/membership-register');
    } else {
      navigate('/membership');
    }
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };

  const handlePoinClick = () => {
    navigate('/user-poin');
  };

  return (
    <div className={`${styles.navbarContainer}`}>
      <div className={`${styles.navbar} ${styles.textWhite}`}>
        <div className={`${styles.navButton} ${currentPath === '/' && styles.active}`} onClick={handleHomeClick}>
          Home
        </div>
        <div className={`${styles.navButton} ${currentPath === '/gym-session' && styles.active}`} onClick={handleBookingClick}>
          Booking
        </div>
        <div className={`${styles.qrButton} ${styles.bgLight}`} onClick={handleQrButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512">
            <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
          </svg>
        </div>
        <div className={`${styles.navButton} ${currentPath === '/history' && styles.active}`} onClick={handleHistoryClick}>
          History
        </div>
        <div className={`${styles.navButton} ${currentPath === '/user-poin' && styles.active}`} onClick={handlePoinClick}>
          Poin
        </div>
      </div>
      <div className={`${styles.navbarBG}`}></div>
    </div>
  );
}

export { UserNavBar };
