import React, { useEffect, useState } from "react";
import styles from "../assets/UserStyle.module.css";
import axios from "axios";

function UserRegisterMember(sessionUser) {
  const [dataMemberPackage, setDataMemberPackage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3100/member-package-data",
        );

        const data = response.data;
        setDataMemberPackage(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return(
    <div className={`${styles.userDashboard}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>JOIN THE TWEAKERS</div>
          <div className={`${styles.textContent}`}>Join our membership to get awesome benefits.</div>
        </div>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
      </div>
      <div className={`${styles.headerRibbon}`}>
        <div className={`${styles.ribbonText}`}>
          JOIN THE TWEAKERS * JOIN THE TWEAKERS * JOIN THE TWEAKERS * JOIN THE TWEAKERS
        </div>
      </div>
      <div className={`${styles.section}`}>
        {console.log(dataMemberPackage)}
      </div>
      <div className={`${styles.footer}`}>
        <div>&copy; 2023 Tweak Gym. All rights reserved.</div>
      </div>
    </div>
  );
}

export {
  UserRegisterMember,
};