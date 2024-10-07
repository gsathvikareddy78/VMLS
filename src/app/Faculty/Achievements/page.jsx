import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <div className={styles.gap}>
      {/* section-1 */}
      <div className={styles.panel}>
        <div className={`${styles.homepage} ${styles.achievementPage}`}>
          <div className={styles.achievementSec1}>
            <div className={styles.img1}>
              <img src="/assets/Frame89.png" alt="image" />
            </div>
            <div className={styles.row}>
              <h3>
                VMLS faculty members are high-impact scholars whose research
                defines the cutting edge.
              </h3>
              <p>
                Vinayaka Mission’s Law School (VMLS) has been established by
                Vinayaka Missions Research Foundation – Deemed to be University
                (VMRF-DU) to impart legal education and legal skills relevant to
                the evolving needs of the local, national and global
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.panel2}>
        <div className={styles.headingContainer}>
          <h3 className={styles.headingText1}> Faculty News</h3>
        </div>
      </div>

      {/* Section 4 */}
      <div className={styles.homeSec4}>
        <div className={styles.section4Row}></div>
        <div className={styles.section4Row}>
          <div className={styles.column4}>
            <a className={styles.readMore} href="#">
              READ MORE
            </a>
            <div
              className={`${styles.inner4} ${styles.inner4Content} ${styles.inner4Content1}`}
            >
              <div className={styles.topContent4}>
                <p>25 JAN 2024</p>
                <h3>Launch of VMLS International Law Review</h3>
              </div>
              <p className={styles.content1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.inner4}>
              <img src="/assets/image-2.jpg" alt="image" />
            </div>
          </div>
          <div className={styles.column4}>
            <a className={styles.readMore} href="#">
              READ MORE
            </a>
            <div
              className={`${styles.inner4} ${styles.inner4Content} ${styles.inner4Content2}`}
            >
              <div className={styles.topContent4}>
                <p>18 Nov 2023</p>
                <h3>1st CJT Lecture</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className={styles.inner4}>
              <img src="/assets/Frame59.png" alt="image" />
            </div>
          </div>
        </div>
        <div className={`${styles.section4Row} ${styles.section4Row2}`}>
          <div className={styles.img4} id="acad-dean-img">
            <img src="/assets/dean.png" alt="image" />
          </div>
          <div className={styles.sec4cntntn}>
            <p>18 Nov 2023</p>
            <h3>Annual Report 2023-24</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.section4Row}>
          <div className={styles.column4}>
            <a className={styles.readMore} href="#">
              READ MORE
            </a>
            <div
              className={`${styles.inner4} ${styles.inner4Content} ${styles.inner4Content3}`}
            >
              <div className={styles.topContent4}>
                <p>18 Nov 2023</p>
                <h3>Legal Design Competition</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.inner4}>
              <img src="/assets/Frame59-3.png" alt="image" />
            </div>
          </div>
          <div className={styles.column4}>
            <a className={styles.readMore} href="./legal-literacy-camp.html">
              READ MORE
            </a>
            <div
              className={`${styles.inner4} ${styles.inner4Content} ${styles.inner4Content4}`}
            >
              <div className={styles.topContent4}>
                <p>18 Nov 2023</p>
                <h3>Legal Literacy Camp</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.inner4}>
              <img src="/assets/Frame59-1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Section 2 */}
      <div className={styles.panel3}>
        <div className={styles.achievementSection2}>
          <div className={styles.section3}>
            <img src="/assets/Frame53136.png" alt="image" />
          </div>
          <div className={styles.section3}>
            <div className={styles.column3}>
              <img src="/assets/Frame53137.png" alt="image" />
            </div>
            <div className={styles.column3}>
              <img src="/assets/Frame53138.png" alt="image" />
            </div>
          </div>
          <div className={styles.section3}>
            <img src="/assets/Frame53139.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
