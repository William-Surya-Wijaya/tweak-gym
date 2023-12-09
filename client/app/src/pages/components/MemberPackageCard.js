import styles from "../../assets/UserStyle.module.css";

function SessionCard({
    sessionName,
    sessionStart,
    sessionEnd,
    sessionDate,
    sessionCapacity,
    sessionPrice,
    onClick,
    }) {
    const handleClick = () => {
        onClick({
        sessionName,
        sessionStart,
        sessionEnd,
        sessionDate,
        sessionCapacity,
        sessionPrice,
        });
    };
return(
    <div className={`${styles.packageCard}`}>
        <div className={`${styles.packageName}`}>Gold Membership</div>
        <div className={`${styles.row} ${styles.justifyContentSpaceBetween}`}>
            <div className={`${styles.packageDuration} ${styles.row}`}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="18" viewBox="0 0 448 512"><path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>30 Days</div>
            <div className={`${styles.packagePrice}`}>50,000 PTS</div>
        </div>
    </div>
);
}

export {
    SessionCard,
};