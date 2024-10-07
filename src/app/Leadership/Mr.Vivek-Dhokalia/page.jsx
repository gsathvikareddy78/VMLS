import styles from "../../Styles/Profile.module.css";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={styles.row}>
            <img src="/faculty/28.png" alt="image" />
            <h3>Mr. Vivek Dhokalia</h3>
            <p>Advocate Supreme Court of India and Adjunct Professor, VMLS.</p>
          </div>
          <div className={styles.floatRow}>
          <p>
                Mr. Vivek Dhokalia grew up in Varanasi. He passed the Senior
                Cambridge examination in 1972 from St. John’s School, Varanasi
                and went on to do his B.A. (Honors) in Economics from Delhi
                University. Being keenly interested in the concept of justice,
                he pursued legal education from Banaras Hindu University (LL.B),
                Southern Methodist University(M.C.L) and Yale University( LL.M),
                where his mentor was Professor W. Michael Reisman.
              </p>
              <p>
                Starting his legal career in 1981 as a junior to the eminent
                jurist, late Dr. L.M Singhvi, Mr. Dhokalia has practiced law in
                India continuously since 1986 in association with some of the
                nationally leading New Delhi based law firms, such as Singhania
                & Co. (October 1986-May 1987); Remfry & Son (June 1987-October
                1988 as an Associate); J.B. Dadachanji & Co. (November 1988 to
                June 1992 as a Senior Associate); New Delhi Law Office (July
                1992 -October 2003 as Partner; and K & S Partners (from November
                2003 to December 2015 as a Partner). In the aforesaid roles, he
                worked on wide ranging issues concerning Corporate and
                Commercial matters and has assisted some major multinational
                companies with their India-bound investments including
                structuring and setting up Joint Venture operations in India. He
                has also extensively advised and litigated (particularly at the
                Delhi High Court and Supreme Court of India) on issues relating
                to both protection and enforcement of Intellectual Property and
                Technology Transfers and Licensing agreements.
              </p>
              <p>
                In the IP domain, he has been the legal counsel in some of the
                landmark reported IP cases including Polson Dairy, Revlon
                (Trademarks), Puneet Controls (Copyright),
                Lintech/Marvel Engineering (Patents), and United Breweries
                Ltd. (Kingfisher advertising case).
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
