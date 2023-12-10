import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const script = document.createElement("script");
script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
script.async = true;
script.setAttribute("data-client-key", "SB-Mid-client-ICLHF4MyunAuPUjZ"); // Ganti dengan kunci klien Snap Anda
document.head.appendChild(script);
script.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css"
        integrity="sha512-8RxmFOVaKQe/xtg6lbscU9DU0IRhURWEuiI0tXevv+lXbAHfkpamD4VKFQRto9WgfOJDwOZ74c/s9Yesv3VvIQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <App />
    </React.StrictMode>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();