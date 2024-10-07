import styles from "./Academics.module.css";

const academics = () => {
  return (
    <div className={styles.panel}>
      <div>
        <div className={styles.academics}>
          {/* Section-1 */}
          <div className={styles.acdemicsSec1}>
            <div className={styles.row} >
              <img src="/assets/Frame53108.png" alt="image" />
            </div>
            <div className={styles.row}></div>
            <div className={styles.row}>
              <h3>Programmes</h3>
              <div className={styles.contentAcad}>
                <p>B.A., LL.B. (Hons.)</p>
                <p>B.Com., LL.B. (Hons.)</p>
                <p>B.B.A., LL.B. (Hons.)</p>
              </div>
            </div>
            <div className={styles.floatRow} >
              <h3>Build a foundation that will support your aspirations.</h3>
              <p>
                The Law Programme is designed with the overarching objective of
                cultivating competent legal professionals equipped to navigate
                the diverse facets of the legal profession and associated career
                pathways. Upon successful completion, our graduates will possess
                a comprehensive skill set encompassing effective verbal and
                written communication, critical thinking, analytical prowess,
                logical reasoning, and adept problem-solving abilities. They
                will have acquired a robust foundation across all studied
                courses, demonstrating proficiency in conducting high-quality
                legal research and the preparation, examination, evaluation, and
                execution of legal documents. Furthermore, graduates will
                exhibit a profound understanding of contemporary social issues,
                engaging with them in a creative and solution-oriented manner.
                This holistic approach extends to instilling a sense of social
                responsibility, encouraging active participation in civic
                duties, and fostering a commitment to ongoing self-reflection
                and lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className={styles.acadSection2}>
        <div className={styles.row}>
          <div className={styles.innerRow}>
            <div className={styles.column}>
              <h3>12</h3>
              <p>Undergraduate Courses from Respective Bachelor’s Stream</p>
            </div>
            <div className={styles.column}>
              <h3>24</h3>
              <p>Law Core and Compulsory Courses</p>
            </div>
            <div className={styles.column}>
              <h3>5</h3>
              <p>Clinical Courses</p>
            </div>
          </div>
          <div className={styles.innerRow}>
            <div className={styles.column}>
              <h3>10</h3>
              <p>Electives (including 8 honors papers)</p>
            </div>
            <div className={styles.column}>
              <h3>2</h3>
              <p>English Language Courses</p>
            </div>
            <div className={styles.column}>
              <h3>100%</h3>
              <p>Mandatory Internships and Professional Skill Labs</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.columnR2}>
            <h3>Credit Structure and Minimum Requirements:</h3>
            <p>
              <span>Law (BCI Core and Compulsories)</span>
              <span>96 credits</span>
            </p>
            <p>
              <span>Electives (including non-taught credits)</span>
              <span>40 credits</span>
            </p>
            <p>
              <span>
                Compulsories (Humanities and Social Sciences
                <br />
                /Business Administration/Commerce Disciplines)
              </span>
              <span>48 credits</span>
            </p>
            <p>
              <span>Clinical Courses (20) and Internships (10)</span>
              <span>30 credits</span>
            </p>
            <p>
              <span>English</span>
              <span>8 credits</span>
            </p>
            <p>
              <span>Labs</span>
              <span>8 credits</span>
            </p>
            <p>
              <span>Total</span>
              <span>230 credits</span>
            </p>
          </span>
        </div>
      </div>

      {/* Section-3 */}
      <div className={styles.acadSec3} >
        <div className={styles.row}>
          <h3>Compulsory Pre-Law Courses</h3>
          <div className={styles.acadSec3Content}>
            <span>
              <p>Political Science I: Introduction to Fundamentals</p>
              <p>Legal and Constitutional History</p>
              <p>Foundations of Research (split into 2-credit courses)</p>
              <p>Foundations of Research (split into 2-credit courses)</p>
              <p>Sociology I: Essentials of Sociology</p>
              <p>Organizational Behaviour</p>
            </span>
            <span>
              <p>Exploring India: Interdisciplinary Insights</p>
              <p>Numerical Thinking and Accounting for Lawyers</p>
              <p>Economics I: Fundamentals of Economics</p>
              <p>
                Additional Compulsory Courses for Core Undergraduate Pre-Law
                Offering
              </p>
              <p>Economics II: Law and Economics</p>
            </span>
          </div>
        </div>
        <div className={styles.row}>
          <img src="/assets/Frame53119.png" alt="image" />
        </div>
      </div>

    </div>
  );
};

export default academics;
