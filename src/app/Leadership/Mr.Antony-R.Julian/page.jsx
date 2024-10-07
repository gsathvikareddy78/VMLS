import styles from "../../Styles/Profile.module.css";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={styles.row}>
            <img src="/faculty/37.png" alt="image" />
            <h3>Mr. Antony R. Julian</h3>
            <p>
              Advocate, Supreme Court of India and Convenor, Steering Committee,
              Centre for Justice through Technology, Vinayaka Mission’s Law
              School(VMLS).
            </p>
          </div>
          <div className={styles.floatRow}>
            <p>
              Mr. Antony R. Julian is a trained International Commercial
              Arbitration counsel who is briefed for Arbitrations as well as
              Court Litigation before various courts in India. He has regular
              appearances in commercial and civil disputes before the Supreme
              Court of India, various State High Courts, the National Company
              Law Appellate Tribunal (NCLAT), National Company Law Tribunal
              (NCLT) and District Courts.
            </p>
            <p>
              He began practice in the chambers of Mr. Salman Khurshid, Sr.
              Advocate, where he appeared in several cases in which reported
              judgments were rendered. Mr. Julian is a Member of the Chartered
              Institute of Arbitrators, London. He holds a degree in Law from
              University College London and a Bachelor’s degree in Economics
              from Loyola College, Chennai.
            </p>
            <p>
              Mr. Julian has advised and represented a number of educational
              institutions in various legal fora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
