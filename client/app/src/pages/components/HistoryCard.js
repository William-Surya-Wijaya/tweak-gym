import styles from "../../assets/UserStyle.module.css";

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'short' };
    const formattedDate = new Date(dateString).toLocaleString('id-ID', options);
    return formattedDate;
}  

function HistoryCard({
    sessionId,
    sessionName,
    sessionStart,
    sessionEnd,
    sessionDate,
    onClick,
    onClose
    }) {
    const handleClick = () => {
        onClick({
            sessionId,
            onClose
        });
    };
return(
    <div className={`${styles.item}`} onClick={handleClick}>
        <div className={`${styles.gymSessionGalerryContent}`}>
            <div className={`${styles.textTitle}`}>{sessionName}</div>
            <div className={`${styles.sessionDetail}`}>
            <div className={`${styles.time}`}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> {sessionStart.substring(0, 5)} - {sessionEnd.substring(0, 5)} / {formatDate(sessionDate)}</div>
            </div>
        </div>
        <div className={`${styles.galleryBanner}`}>
            <div className={`${styles.rotateText}`}>LIHAT TIKET QR</div>
        </div>
        <img src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt="gymimage"></img>
    </div>
);
}

export {
    HistoryCard,
};