import styles from "../../Styles/Profile.module.css";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={styles.row}>
            <img src="/faculty/ananth.jpg" alt="image" />
            <h3>Prof. Dr. Ananth Padmanabhan</h3>
            <p>Dean, Vinayaka Mission Law School.</p>
          </div>
          <div className={styles.floatRow}>
            <p>
              Dr. Ananth Padmanabhan is currently on leave of absence and
              pursuing a mid-career Masters in Management Science (MSx Sloan
              Fellow ’23) at the University of Stanford Graduate School of
              Business (expected graduation in June 2023). An expert in
              intellectual property rights and technology policy, Ananth is a
              non-resident senior fellow at the Institute for South Asian
              Studies, NUS. He has authored a leading treatise, Intellectual
              Property Rights: Infringement and Remedies (LexisNexis, 2012), and
              co-edited an important volume, India as a Pioneer of
              Innovation (OUP, 2017).
            </p>
            <p>
              His co-authored chapter on Big Data in an impactful volume
              on Regulation in India: Design, Capacity, Performance (Hart
              Publishing, 2019), is part of a continuing initiative to examine
              the public law and regulatory dimensions of new technologies. It
              builds on his understanding of the Indian State and the Supreme
              Court within the constitutional context, explored through chapters
              in Rethinking Public Institutions in India (OUP, 2017), and
              the Oxford Handbook of the Indian Constitution (OUP, 2016). He
              engages in broader public conversations on the impact of
              technology through his opinion pieces in Hindustan Times,
              ThePrint, Livemint, Indian Express, and other print / new media.
            </p>
            <p>
              Ananth holds masters and doctoral degrees from the University of
              Pennsylvania Carey Law School, and completed his B.A LL.B (Hons.)
              from the National Law School of India University, Bangalore in
              2007. He has formerly held leadership positions including founding
              dean of Sai University Law School and team lead for the technology
              and policy research vertical at Carnegie India. He takes pride in
              having created India’s first residential fellowship for lawyers,
              Daksha Fellowship, with its primary focus on technology law and
              policy.
            </p>

            <h4>Academic Qualifications</h4>
            <ul>
              <li>
                <b>MSx Sloan Fellow</b>, Business Administration, and
                Management, Stanford University Graduate School of Management,
                USA
              </li>
              <li>
                <b>SJD and LL.M</b>, University of Pennsylvania Carey Law
                School, USA
              </li>
              <li>
                <b>B.A., LL.B (Hons.)</b>, National Law School of India
                University
              </li>
              <li>Law Sch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
