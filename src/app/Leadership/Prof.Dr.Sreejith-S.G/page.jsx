import styles from "../../Styles/Profile.module.css";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={styles.row}>
            <img src="/faculty/29.png" alt="image" />
            <h3>Prof. Dr. Sreejith S.G</h3>
            <p>
              Executive Dean, Jindal Global law school, O.P. Jindal Global
              university.
            </p>
          </div>
          <div className={styles.floatRow}>
            <p>
              Prof. (Dr.) S.G. Sreejith is Professor and Executive Dean, Jindal
              Global Law School, O.P. Jindal Global (Institution of Eminence
              Deemed to be University). He holds LL.D. (with high honours) from
              the University of Lapland, M.Phil. from Jawaharlal Nehru
              University, M.B.L. and LL.B. both from the University of Kerala.
              Prior to joining JGLS, he worked with reputed institutions like
              the Arctic Centre, the University of Lapland, National University
              of Advanced Legal Studies (NUALS), and the University of Kerala.
              He is the author of “Transcending Jurisprudence: A Critique of the
              Architectonics of International Law” (Lapland: Lapland University
              Press, 2010). He has also published in journals like Third World
              Quarterly, Hastings International and Comparative Law Review, San
              Diego International Law Journal, California Western International
              Law Journal, Indiana International and Comparative Law Review,
              Journal of Space Law, Journal of Air Law and Commerce, San Joaquin
              Agricultural Law Review, Air and Space Law, Space Policy, Journal
              of Law and Social Deviance, Indian Journal of International Law,
              Journal of the Indian Law Institute, to name few. He sits on the
              editorial board of the Indian Journal of International Law
              (Springer). He has also served as special issue editor of Journal
              of Human Values (Sage) and Jindal Global Law Review (Springer).
            </p>
            <p>
              Professor Sreejith is the winner of AAAF Brun Award and Medal
              instituted by the Association Aeronautique ET Astronautique De
              France. He has been awarded the “CIMO Fellowship” of the
              Government of Finland (2004) and the research grants of “Ella and
              Georg Ehnrooth Foundation” (2007), “Finnish Cultural Foundation”
              (2008), and “Finnish Lawyers’ Association (2009). His areas of
              interest are public international law, heterodox approaches to
              international legal thought, and air and space law. He is the
              Study Group Chair for Public International Law, International
              Association of Law Schools (IALS). He was also the CNISCO Overseas
              Visiting Fellow, at the Shanghai University of Political Science
              and Law.
            </p>
            <h4>Education</h4>
            <ul>
              <li>
                <b>LL.B.</b>; <b>M.B.L.</b> (University of Kerala)
              </li>
              <li>
                <b>M.Phil.</b> (Jawaharlal Nehru University, New Delhi)
              </li>
              <li>
                <b>LL.D.</b> (University of Lapland)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
