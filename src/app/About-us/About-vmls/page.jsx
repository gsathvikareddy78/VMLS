import React from 'react';
import styles from './Aboutvmls.module.css'; 

const AboutVMLS = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.aboutUsInner}>
        <div className={styles.aboutUsRow1}>
          <div className={styles.aboutRow1Column}>
            <h3>Faculty Achievements</h3>
          </div>
          <div className={styles.aboutRow1Column}>
            <h3>
              <span>V</span><span> M</span><span> L</span><span>S</span>
            </h3>
          </div>
          <div className={styles.aboutRow1Column}>
            <h3>
              OP Jindal Global University (an Institution <br />of Eminence) and Jindal Global Law School
            </h3>
            <div className={styles.bottomAlignAbt}>
              <h4>MENTORED BY</h4>
            </div>
          </div>
          <div className={styles.aboutRow1Column}>
            <h3>DEAN</h3>
            <h4>Dr. Ananth Padmanabhan</h4>
          </div>
          <div className={styles.aboutRow1Column}>
            <h3>Law School of the Future</h3>
          </div>
          <div className={styles.aboutRow1Column}>
            <h3>Centres of Excellence</h3>
          </div>
          <div className={styles.aboutRow1Column}>
            <h3>Mentoring Committee | Board of Advisors</h3>
          </div>
        </div>
        <div className={styles.aboutUsRow2}>
          <h3>About VMLS</h3>
          <div className={styles.content}>
            <p>
              Vinayaka Mission’s Law School (VMLS) has been established by
              Vinayaka Missions Research Foundation – Deemed to be
              University (VMRF-DU) to impart legal education and legal
              skills relevant to the evolving needs of the local, national,
              and global communities.
            </p>
            <p>
              Vinayaka Mission began in 1981 with the establishment of the
              Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal
              (TKVTSS) Medical Educational and Charitable Trust, to achieve
              excellence in education and bring about social change.
              Thereafter, in 1982, the Founder-Chairman, Dr. A
              Shanmugasundaram instituted the Vinayaka Mission’s College of
              Pharmacy in Salem, the pioneer institution of Vinayaka
              Mission. In 2003, “Deemed to be University” status was
              conferred on Vinayaka Mission by the Ministry of Human
              Resources Development, Government of India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVMLS;
