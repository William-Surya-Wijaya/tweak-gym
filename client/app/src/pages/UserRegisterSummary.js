import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import styles from "../assets/UserStyle.module.css";

function usePayment() {
  const validateAndProcess = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3100/register-tweak-member",
        formData,
        {
          headers: {
            "x-api-key":
              "6924e5a89d788bb511a821e8e6534ac278e964510c6dcaf1d33495b123659191352c0150b2584d9c709b4a13052c0664f07334789572dd0e943a3566dcc1659d",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        // eslint-disable-next-line no-undef
        snap.pay(response.data.token, {
          onSuccess: function (result) {
            console.log("Pembayaran sukses", result);
            // Mereload halaman jika pembayaran sukses
            window.location.reload();
          },
          onPending: function (result) {
            console.log("Pembayaran tertunda", result);
            // Mereload halaman jika pembayaran tertunda
            window.location.reload();
          },
          onError: function (result) {
            console.log("Pembayaran gagal", result);
            // Mereload halaman jika pembayaran gagal
            window.location.reload();
          },
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Login Failed!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return { validateAndProcess };
}

function UserRegisterSummary({
  idMemberPackage,
  packageName,
  packageDuration,
  packagePrice,
  onClose,
}) {
  const { validateAndProcess } = usePayment();

  const handlePayment = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    const formData = {
      memb_package: idMemberPackage,
      net_amount: packagePrice,
      purchase_date: formattedDate,
    };
    console.log(formData);

    validateAndProcess(formData);
  };

  return (
    <div className={`${styles.userOrderSummary}`}>
      <div className={`${styles.gymSessionHeader}`}>
        <div className={`${styles.gymSessionSubTitle}`}>
          <div className={`${styles.textTitle}`}>Order Summary</div>
        </div>
      </div>
      <div className={`${styles.section}`}>
        <div className={`${styles.textTitle}`}>{packageName}</div>
        <div className={`${styles.textContent}`}>
          Your order <b>{packageName}</b>
          <br></br>
          <b>Membership</b> for <b>{packageDuration} Days</b>.
        </div>
        <div
          className={`${styles.dashboardGallery} ${styles.membershipGallery}`}
        >
          <div className={`${styles.item}`}>
            <div className={`${styles.galleryContent}`}>
              <div className={`${styles.col}`}>
                <div className={`${styles.topProfile}`}>
                  <img
                    className={`${styles.topLogo}`}
                    src="https://cdn.dribbble.com/users/6177297/screenshots/20141188/media/766dc94001d4ef551ba405786fbbb323.jpg?resize=400x0"
                    alt="gym-logo"
                  ></img>
                </div>
              </div>
              <div className={`${styles.col}`}>
                <div className={`${styles.textTitle}`}>
                  {packageName.split(" ")[0]} Package
                </div>
                <div className={`${styles.textContent}`}>
                  {packagePrice.toLocaleString()} Tweak Points
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.item}`}>
          <div className={`${styles.buttonLight}`} onClick={handlePayment}>
            Proceed to Payment
          </div>
          <div className={`${styles.buttonTransparent}`} onClick={onClose}>
            Cancel Order
          </div>
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <div>&copy; 2023 Tweak Gym. All rights reserved.</div>
      </div>
    </div>
  );
}

export { UserRegisterSummary };
