import styles from "../assets/AdminStyle.module.css";

function AdminDashboard() {
  return(
    <div className={`${styles.red} text-3xl font-bold underline`}>AdminDashboard</div>
  );
}

export {
  AdminDashboard,
};