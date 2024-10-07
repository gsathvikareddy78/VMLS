import styles from "../../Styles/Profile.module.css";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={styles.row}>
            <img src="/faculty/35.png" alt="image" />
            <h3>Mr. J. Suresh Samuel</h3>
            <p>Member, Board of Management, VMRF-DU</p>
          </div>
          <div className={styles.floatRow}>
          <p>
                Mr. Suresh Samuel graduated from the Government College of
                Engineering, Salem, and pursued Business Administration and
                Strategic Management programs with LIBA, Chennai, and Cornell
                University, USA respectively. He spent the initial decade of his
                career with leading multinational companies like Raptakos, Brett
                & Co. Ltd., PepsiCo India and Britannia Industries Limited
                specializing in Operations and Quality Management Systems.
              </p>
              <p>
                He switched to the IT industry in 2000 to manage Quality
                Management Systems and subsequently spearheaded Software Testing
                Practices in HCL Technologies. He also worked for iSOFT,
                Covansys, Computer Sciences Corporation (presently DXC
                Technologies), Encore Technologies, and UST Technologies in
                global roles such as General Manager, Vice President and Senior
                Vice President and has managed IT Services businesses in the
                USA, UK, Europe and the Asia Pacific.
              </p>
              <p>
                Mr. Samuel has more than 31 years of industry experience in
                Pharmaceutical and FMCG, and as a Business Leader in IT
                Services, providing Testing Services to Banking, Financial
                Services, Insurance, Health Care Providers & Payers, Life
                Sciences, Automotive, Discrete Manufacturing, Technology, and
                Product companies.
              </p>
              <p>
                He co-founded Healthsana and is a Partner at SEMM Consulting
                specializing in Business Transformation. He is also a Member of
                the Board of Management with Vinayaka Mission’s Research
                Foundation.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
