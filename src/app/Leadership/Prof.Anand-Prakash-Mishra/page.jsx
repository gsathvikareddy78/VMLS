import styles from "../../Styles/Profile.module.css";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={styles.row}>
            <img src="/faculty/36.png" alt="image" />
            <h3>Prof. Anand Prakash Mishra</h3>
            <p>
              Director, Law School Admission, O.P. Jindal Global University.
            </p>
          </div>
          <div className={styles.floatRow}>
            <p>
              Professor Anand Prakash Mishra is an Associate Professor and
              Associate Dean at Jindal Global Law School of OP Jindal Global
              University.
            </p>
            <p>
              Professor Mishra obtained his Bachelor of Law (LL.B.) and Master
              of Law (LL.M.) degrees from the Campus Law Centre, Faculty of Law,
              University of Delhi and qualified UGC-NET in Law. He also earned a
              BA Honours in Economics from Patna University with a top rank. He
              has spent over two decades in the field of legal education and
              higher education and serving O.P. Jindal Global University for
              last 12 years.
            </p>
            <p>
              Professor Mishra teaches courses in Torts, Labour Law and Legal
              Methods at the law school. He is also a Fellow at the
              International Institute of Higher Education Research & Capacity
              Building (IIHEd). His areas of research include legal education
              and higher education in India.Professor Mishra is Director of Law
              Admissions of the University and provides leadership to admissions
              and outreach of the law school. He is in the relentless pursuit of
              making Jindal Global Law School as the most preferred destination
              of legal education in whole of Asia.
            </p>

            <h4>Education</h4>
            <ul>
              <li>
                <b>LLB.</b>; <b>LL.M.</b> (University of Delhi)
              </li>
              <li>
                <b>UGC-NET(law)</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
