import styles from "../../Styles/Profile.module.css";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={`${styles.row}`} >
            <img src="/24.png" alt="Dr. A. Shanmugasundaram" />
            <h3>Dr. A. Shanmugasundaram</h3>
            <p>Founder</p>
          </div>
          <div className={styles.floatRow}>
            <p>
              Dr. A. Shanmugasundaram, a Philanthropist and Educationist,
              established the Thirumuruga Kirupananda Variyar Thavathiru
              Sundara Swamigal Medical Educational & Charitable Trust in 1981.
              It is a registered, self-supported Trust based in Salem, Tamil
              Nadu, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
