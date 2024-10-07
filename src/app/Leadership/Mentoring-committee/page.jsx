import styles from './mentoring.module.css';

const mentoring = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.committee}>
        <div className={styles.row} >
          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <h3>Head</h3>
            </div>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Dr.A.Francis-Julian">
                <div className={styles.image}>
                  <img src="/assets/committee1.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Dr. A. Francis Julian</h3>
                  <p>Senior Advocate, Supreme court of India</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <h3>Permanent Invitee</h3>
            </div>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Prof.Dr.C.Raj-Kumar">
                <div className={styles.image}>
                  <img src="/assets/committee2.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Prof. (Dr). C. Raj Kumar</h3>
                  <p>Vice Chancellor, O.P. Jindal Global University</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <h3>Ex- Officio Members</h3>
            </div>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Prof.Dr.Ananth-Padmanabhan">
                <div className={styles.image}>
                  <img src="/assets/committee3.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Prof. (Dr.) Ananth Padmanabhan</h3>
                  <p>Dean, Vinayaka Mission Law School</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.row} >
          <div className={styles.column}>
            <h3>Members</h3>
          </div>

          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Mr.J.Suresh-Samuel">
                <div className={styles.image}>
                  <img src="/assets/committee4.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Mr. J. Suresh Samuel</h3>
                  <p>Member, Board of Management, VMRF-DU</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Mr.Vivek-Dhokalia">
                <div className={styles.image}>
                  <img src="/assets/committee5.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Mr. Vivek Dhokalia</h3>
                  <p>
                    Advocate Supreme Court of India and Adjunct Professor, VMLS
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Prof.Anand-Prakash-Mishra">
                <div className={styles.image}>
                  <img src="/assets/committee6.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Prof. Anand Prakash Mishra</h3>
                  <p>
                    Director, Law School Admission, O.P. Jindal Global
                    University
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Prof.Dr.Sreejith-S.G">
                <div className={styles.image}>
                  <img src="/assets/committee7.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Prof. (Dr.) Sreejith S.G</h3>
                  <p>
                    Executive Dean, Jindal Global law school, O.P. Jindal
                    Global university
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.innerColumn}>
              <a href="/Leadership/Mr.Antony-R.Julian">
                <div className={styles.image}>
                  <img src="/assets/committee8.png" alt="" />
                </div>
                <div className={styles.content}>
                  <h3>Mr. Antony R. Julian</h3>
                  <p>
                    Advocate, Supreme Court of India and Convenor, Steering
                    Committee, Centre for Justice through Technology, Vinayaka
                    Mission’s Law School(VMLS)
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mentoring;
