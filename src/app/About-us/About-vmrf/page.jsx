import styles from "./Aboutvmrf.module.css";
import Image from "next/image";

export default function Component() {
  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.acdemicsSec1}>
          <div className={`${styles.row}`}>
            <Image
              src="/about-vmrf.jpg"
              alt="About VMRF"
              width={893}
              height={1000}
            />
          </div>
          <div className={styles.floatRow}>
            <h3>About VMRF</h3>
            <p>
              Vinayaka Mission’s Research Foundation (VMRF) is an innovative and
              pioneering University that offers a multi-disciplinary learning
              experience.
            </p>
            <p>
              In 1981, Thirumuruga Kirupananda Variyar Thavathiru Sundara
              Swamigal Medical Educational and Charitable Trust was established,
              followed by Vinayaka Mission’s College of Pharmacy in 1982. In
              2001, the trust became Vinayaka Mission’s Research Foundation
              (VMRF), the 48th University in India, after being recognized for
              its excellence and academic standards. The University’s primary
              objective is to offer high-quality education to students from all
              walks of life. As one of the largest universities in India, VMRF
              offers a wide range of academic disciplines, with a comprehensive
              range of faculties that covers almost the entire gamut of academic
              disciplines, including medicine, paramedicine, engineering and
              technology, management, arts and sciences, law, among others.
            </p>
            <p>
              The University’s multi-disciplinary approach to education offers
              students an opportunity to explore different fields, gain a
              diverse range of skills, and achieve academic excellence. The
              University also provides various opportunities for students to
              engage in research, community service, and internships, among
              other activities, to enhance their learning experience. With
              campuses at Chennai, Salem, and Pondicherry, VMRF’s scenic
              campuses are known for their state-of-the-art facilities,
              including modern classrooms, advanced laboratories, well-stocked
              libraries, and sports complexes.
            </p>
            <p>
              VMRF has nearly 15,000 students across its various colleges, and
              over 2,000 professionals graduate from its campuses annually. With
              over 5,000 staff members, VMRF is known for its highly qualified
              and experienced faculty and for establishing multiple medical,
              dental, engineering, paramedical, and homoeopathy colleges. The
              University’s commitment to providing quality education has
              resulted in producing highly successful graduates who have
              excelled in their respective fields. With a focus on academic
              excellence, professional development, and research, VMRF continues
              to be a leading institution in India and a preferred choice for
              students seeking a well-rounded education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
