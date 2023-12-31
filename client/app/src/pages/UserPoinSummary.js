import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import styles from "../assets/UserStyle.module.css";

function usePayment() {
  // eslint-disable-next-line no-undef

  const validateAndProcess = async (formData) => {
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3100/point-transaction",
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
      console.error("Error validating and processing payment:", error);
      Swal.fire({
        title: "Payment Failed!",
        text: "Failed to process payment. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return { validateAndProcess };
}

function UserPoinSummary({ poinPrice, onClose }) {
  console.log("Rendering UserPoinSummary with poinPrice:", poinPrice);
  const { validateAndProcess } = usePayment();

  const handlePayment = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    const formData = {
      net_ammount: poinPrice,
      purchase_date: formattedDate,
    };

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
        <div className={`${styles.textTitle}`}>
          {Number(poinPrice).toLocaleString()} Tweak Points
        </div>
        <div className={`${styles.textContent}`}>
          Your order <b>{Number(poinPrice).toLocaleString()}</b>
          <br></br>
          <b>Tweak Points</b>.
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

export { UserPoinSummary };
