import styles from "../../Styles/Profile.module.css";
import Image from "next/image";

const AcademicQualifications = () => (
  <ul className={styles.academicQualifications}>
    <li>
      MSx Sloan Fellow, Business Administration, and Management,
      Stanford University Graduate School of Management, USA.
    </li>
    <li>
      SJD and LL.M, University of Pennsylvania Carey Law School, USA.
    </li>
    <li>
      B.A., LL.B (Hons.), National Law School of India University.
    </li>
  </ul>
);

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={styles.row}>
            <Image
              src="/ananth.jpg"
              alt="Dr. Ananth Padmanabhan"
              width={580} 
              height={580} 
            />
            <h3>Dr. Ananth Padmanabhan</h3>
            <p>Dean</p>
          </div>
          <div className={styles.floatRow}>
            <p>
              Dr. Ananth Padmanabhan is an expert in intellectual property
              rights and technology policy. He has been serving as the Dean of
              VMLS since July 2023, after completing a mid-career business
              program (MSx Sloan Fellow ‘23) from Stanford University
              Graduate School of Business in June 2023. He has authored a
              leading treatise, <em>Intellectual Property Rights: Infringement and Remedies</em>
              (LexisNexis, 2012), and co-edited an important volume,
              <em>India as a Pioneer of Innovation</em> (OUP, 2017).
            </p>
            <p>
              His co-authored chapter on Big Data in an impactful volume on
              <em> Regulation in India: Design, Capacity, Performance</em> (Hart
              Publishing, 2019) is part of a continuing initiative to examine
              the public law and regulatory dimensions of new technologies. It
              builds on his understanding of the Indian State and the Supreme
              Court within the constitutional context, explored through chapters
              in <em>Rethinking Public Institutions in India</em> (OUP, 2017) and the
              <em> Oxford Handbook of the Indian Constitution</em> (OUP, 2016). He engages
              in broader public conversations on the impact of technology
              through his opinion pieces in various media outlets.
            </p>
            <p>
              Ananth holds master's and doctoral degrees in law from the
              University of Pennsylvania Carey Law School and completed his
              B.A LL.B (Hons.) from the National Law School of India University,
              Bangalore in 2007. He has formerly held leadership positions
              including founding dean of Sai University Law School and team lead
              for the technology and policy research vertical at Carnegie India,
              where he curated the inaugural edition of Carnegie’s Global
              Technology Summit, an annual flagship conference that takes place
              in Bengaluru. He takes pride in having created India’s first
              residential fellowship for lawyers, Daksha Fellowship, with its
              primary focus on technology law and policy.
            </p>
            <p>
              At VMLS, we spend all our energies unraveling what the law school
              of the future means and should aspire to achieve. We have built
              our blueprint for this vision on three key pillars: inclusivity
              and diversity within our student pool, aided by bilingual teaching
              support; future-proofing our learners by equipping them with
              skills and knowledge pertaining to the impact of emerging
              technologies on both the content and practice of law; extensive
              clinical education with a focus on justice delivery and support
              for the most deserving among us. All our four centers of
              excellence, smart classrooms, and other state-of-the-art
              infrastructure, and faculty with international training and
              exposure exist and collaborate in service of this vision.
            </p>
            <p>Academic Qualifications</p>
            <AcademicQualifications />
          </div>
        </div>
      </div>
    </div>
  );
}
