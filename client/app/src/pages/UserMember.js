import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/UserStyle.module.css";
import axios from "axios";

function UserMember(sessionUser) {
  const navigate = useNavigate();

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
          navigate("/login");
        }
        const data = response.data;
        console.log(data);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  const [dataMember, setDataMember] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3100/user-member-data",
        );

        const data = response.data.dataGymSession;
        setDataMember(data);
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
          <div className={`${styles.textTitle}`}>WELCOME TWEAKERS !{dataMember}</div>
          <div className={`${styles.textContent}`}>Your membership will be end at 31 December 2023, make sure to use the remaining time to exercise.</div>
          {/* <div className={`${styles.row}`}>
            <div className={`${styles.buttonLight}`}>Start Now</div>
            <div className={`${styles.buttonTransparent}`}>Learn More</div>
          </div> */}
        </div>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
        VIP MEMBERSHIP * VIP MEMBERSHIP * VIP MEMBERSHIP * VIP MEMBERSHIP
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>YOUR BENEFIT</div>
        <div className={`${styles.dashboardGallery} ${styles.membershipGallery}`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>ONE FREE CLASS PER DAY</div>
              <div className={`${styles.textContent}`}>You can book any class once per day freely.</div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>FREE DRINK WATER REFILL</div>
              <div className={`${styles.textContent}`}>You can refill your drink water freely.</div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.textTitle}`}>MEMBER ROOM</div>
              <div className={`${styles.textContent}`}>Get access to the members-only break room.</div>
            </div>
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
  UserMember,
};