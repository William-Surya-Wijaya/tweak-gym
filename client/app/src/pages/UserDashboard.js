import styles from "../assets/UserStyle.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function UserDashboard() {
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
  return (
    <div className={`${styles.userDashboard}`}>
      <div className={`${styles.dashboardHeader}`}>
        <div className={`${styles.dashboardSubTitle}`}>
          <div className={`${styles.textTitle}`}>JOIN US !</div>
          <div className={`${styles.textContent}`}>
            Ready for a fitness revolution? Join our gym and be a part of a
            vibrant, motivated community.
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.buttonLight}`}>Start Now</div>
            <div className={`${styles.buttonTransparent}`}>Learn More</div>
          </div>
        </div>
        <img
          src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"
          alt="gymimage"
        ></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
          CONVINIENT LOCATION & SCHEDULE * DRAWING UP AN INDIVIDUAL TRAINING
          PROGRAM BEST PROFESSIONAL TRAINERS
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>WHY CHOOSE US</div>
        <div className={`${styles.dashboardGallery}`}>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45"
                width="57"
                viewBox="0 0 640 512"
              >
                <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
              </svg>
              <div className={`${styles.textTitle}`}>PROFESSIONAL TRAINERS</div>
              <div className={`${styles.textContent}`}>
                Benefit from the expertise of our certified and experienced
                fitness trainers dedicated to helping you achieve your goals.
              </div>
            </div>
            <img
              src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"
              alt="gymimage"
            ></img>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="57"
                width="45"
                viewBox="0 0 448 512"
              >
                <path d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
              </svg>
              <div className={`${styles.textTitle}`}>VIBRANT COMMUNITY</div>
              <div className={`${styles.textContent}`}>
                Become part of a supportive and motivated fitness community,
                fostering encouragement and camaraderie throughout your fitness
                journey.
              </div>
            </div>
            <img
              src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"
              alt="gymimage"
            ></img>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="57"
                width="45"
                viewBox="0 0 448 512"
              >
                <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
              </svg>
              <div className={`${styles.textTitle}`}>VARIETY OF CLASS</div>
              <div className={`${styles.textContent}`}>
                Enjoy a diverse range of fitness classes, from high-intensity
                workouts to relaxing yoga sessions, catering to different
                preferences and fitness levels.
              </div>
            </div>
            <img
              src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"
              alt="gymimage"
            ></img>
          </div>
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <div>&copy; 2023 Tweak Gym. All rights reserved.</div>
      </div>
    </div>
  );
}

export { UserDashboard };