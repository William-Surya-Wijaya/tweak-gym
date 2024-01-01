import React, { useEffect, useState } from "react";
import { MemberPackageCard } from './components/MemberPackageCard';
import { useNavigate } from "react-router-dom";
import styles from "../assets/UserStyle.module.css";
import { UserRegisterSummary } from './UserRegisterSummary';
import axios from "axios";

function UserRegisterMember() {
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
        const data = response.data.dataUser;
        setDataSession(data);
      } catch (error) {
        console.log('error');
        navigate('/login');
      }
    };
    fetchData();
  }, []);

  const [gymOrderModal, setShowModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleOpenModal = (sessionData) => {
    setSelectedSession(sessionData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [dataMemberPackage, setDataMemberPackage] = useState(null);
  const [dataSession, setDataSession] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3100/member-package-data"
        );

        const data = response.data;
        setDataMemberPackage(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const getSession = async () => {
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
        console.log(error);
      }
    };

    fetchData();
    getSession();
  }, []);


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
      <div className={`${styles.section}`} style={{ minHeight: '60vh'}}>
        {dataSession && dataMemberPackage &&
          dataMemberPackage.memb_package_data &&
          Array.isArray(dataMemberPackage.memb_package_data) &&
          dataMemberPackage.memb_package_data.length > 0 &&
          dataMemberPackage.memb_package_data.map((item, index) => (
            <MemberPackageCard
              key={index}
              userEmail={dataSession.email}
              idMemberPackage={item.id_memb_pack}
              packageName={item.package_name}
              packageDuration={item.package_duration}
              packagePrice={item.package_price}
              onClick={handleOpenModal}
              onClose={handleCloseModal}
            />
          ))}
      </div>
      {gymOrderModal && selectedSession && (
        <UserRegisterSummary
          userEmail={dataSession.userEmail}
          idMemberPackage={selectedSession.idMemberPackage}
          packageName={selectedSession.packageName}
          packageDuration={selectedSession.packageDuration}
          packagePrice={selectedSession.packagePrice}
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
  UserRegisterMember,
};