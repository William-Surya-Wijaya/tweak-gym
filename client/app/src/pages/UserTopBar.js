import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../assets/UserStyle.module.css";
import axios from "axios";

function UserTopBar() {
  const navigate = useNavigate();
  const [dataSession, setDataSession] = useState(null);

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
        const data = response.data.dataUser;
        setDataSession(data);
      } catch (error) {
        console.log('error');
        navigate('/login');
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3100/logout", {
        headers: {
          "x-api-key":
            "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d",
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.error("Error during logout:", error);
      navigate("/login");
    }
  };

  return(
    <div className={`${styles.topbarContainer}`}>
      <div className={`${styles.topbar} ${styles.textWhite} xs:w-[100%] ss:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[30%]`}>
        <div className={`${styles.topProfile}`}><img className={`${styles.topLogo}`} src="https://cdn.dribbble.com/users/6177297/screenshots/20141188/media/766dc94001d4ef551ba405786fbbb323.jpg?resize=400x0" alt="gym-logo"></img></div>
        <div className={`${styles.gymName}`}>TWEAK GYM</div>
        <div className={`${styles.topUserName}`}>Hello, <span className={`${styles.textHighlight}`}>{dataSession ? (dataSession.user_name).split(' ')[0] : ''}</span><svg className={`${styles.invert}`} xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></svg></div>
        <div className={`${styles.logoutTop}`} onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg></div>
      </div>
      <div className={`${styles.topbarBG}`}>
        
      </div>
    </div>
  );
}

export {
  UserTopBar,
};