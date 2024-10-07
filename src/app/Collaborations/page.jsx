import styles from "./Collaborations.module.css";

const Heading = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.headingContainer}>
        <h3 className={styles.headingText1}>Collaborations</h3>
      </div>
      <div>
        <div>
          <h3 className={styles.headingText2}>Institutional</h3>
          <div className={styles.slider}>
            <ul>
              <li>
                <img src="/assets/logo/1.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/2.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/3.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/4.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/5.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/6.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/7.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/8.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/9.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/10.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/11.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/12.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/13.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/14.png" alt="" />
              </li>
              <li>
                <img src="/assets/logo/15.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.logoImg}>
            <h3 className={styles.headingText2}>Academic</h3>
            <div className={styles.sec2Logos}>
              <div>
                <img src="/O.P1.png" alt="image" />
              </div>
              <div>
                <img src="/Group454.png" alt="image" />
              </div>
            </div>
            <p>
              VMLS is being mentored by O.P. Jindal Global University (an
              Institution of Eminence) and Jindal Global Law School under an
              institutional mentorship agreement.
            </p>
          </div>
          <div>
            <img src="/Frame-53245.png" alt="image" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
