import styles from "./Admission.module.css";

const EligibilityCriteria = ({ title, criteria, admissionCriteria }) => (
  <div className={styles.one}>
    <h4>{title}:</h4>
    <ul>
      {criteria.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <h4>Admission Criteria:</h4>
    <ul>
      {admissionCriteria.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const AdmissionStep = ({ stepNumber, description }) => (
  <div className={styles.innerColumn}>
    <h3>{stepNumber}</h3>
    <p>{description}</p>
  </div>
);

const VlatInfo = ({ title, programmes }) => (
  <div className={styles.innerColumn}>
    <h4>{title}</h4>
    <ul>
      {programmes.map((programme, index) => (
        <li key={index}>{programme}</li>
      ))}
    </ul>
  </div>
);

const HowToApply = () => {
  return (
    <div className={styles.gap}>
      <div className={styles.panel}>
        <div className={styles.howToApply}>
          {/* Section 1 */}
          <div className={styles.htaSection1}>
            <div className={styles.row}>
              <img src="/assets/Frame-53131.png" alt="image" />
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <h3>Five Year Integrated Law Programme:</h3>
                <EligibilityCriteria
                  title="Eligibility"
                  criteria={[
                    "A pass in 10+2/Intermediate or equivalent examination. (Candidates appearing for April-May 2023 Examinations can also apply.)",
                    "Not less than 45% marks for General Category, 42% for OBC and 40% for SC/ST.",
                  ]}
                  admissionCriteria={[
                    "VLAT 5 Score*",
                    "10+2 (or equivalent) marks",
                  ]}
                />
                <p>
                  *Alternatively, the Valid Score of LSAT-India / CLAT / AILET
                  and MHCET scores are also accepted.
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <h3>Three Year Law Programme:</h3>
                <EligibilityCriteria
                  title="Eligibility"
                  criteria={[
                    "Bachelor’s degree in any stream from a University or an equivalent Institution recognized as deemed to be University or from a foreign University declared as equivalent to an Indian degree by a competent authority (Candidates who expect to graduate in June 2023 may also apply).",
                    "Not less than 45% marks for General Category, 42% for OBC and 40% for SC/ST.",
                  ]}
                  admissionCriteria={[
                    "VLAT 3 Score*",
                    "Bachelor’s Degree marks.",
                  ]}
                />
                <p>
                  *Alternatively, Valid scores of LSAT- India / CUET and NLSAT
                  scores are also accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.panel2}>
        <div className={styles.headingContainer}>
          <h3 className={styles.headingText1}>Admission Process</h3>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles.htaSection2}>
        <div className={styles.row}>
          <div className={styles.column}>
            {[
              "1. Register yourself and verify email.",
              "2. Fill Application Form Online",
              "3. Pay Application Fee",
            ].map((step, index) => (
              <AdmissionStep
                key={index}
                stepNumber={step[0]}
                description={step.slice(3)}
              />
            ))}
          </div>
          <div className={styles.column}>
            {[
              "4. Submission of Application with all required documents",
              "5. Submitted Application will be processed internally",
              "6. Release of Admission Offer Letter/Hall Ticket",
            ].map((step, index) => (
              <AdmissionStep
                key={index}
                stepNumber={step[0]}
                description={step.slice(3)}
              />
            ))}
          </div>
          <div className={styles.column}>
            {["7. VLAT Exam", "8. Release of Provisional Admission Letter"].map(
              (step, index) => (
                <AdmissionStep
                  key={index}
                  stepNumber={step[0]}
                  description={step.slice(3)}
                />
              )
            )}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>VLAT (VMRF Law Aptitude Test)</h3>
            <ul>
              <li>
                VMRF Law Aptitude Test is an entrance test specifically designed
                to understand the Reading and Comprehension Skills, Reasoning,
                and Critical Thinking Ability of the students that are essential
                to pursue Legal Education.
              </li>
              <li>
                Considering the different eligibility criteria for the Three
                Year and Five Year Programmes, two different sets of VLATs, VLAT
                3 and VLAT 5 will be conducted respectively.
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <VlatInfo
              title="VLAT 5"
              programmes={[
                "B.B.A. LL.B. (Hons.)",
                "B.Com. LL.B. (Hons.)",
                "B.A. LL.B. (Hons.)",
              ]}
            />
            <VlatInfo title="VLAT 3" programmes={["LL.B. (Hons.)"]} />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className={styles.htaSection3}>
        <div className={styles.row}>
          <h3>VLAT Formats</h3>
          <p>
            The question paper will consist of two different sections each
            containing objective multiple choice questions (MCQs).
          </p>
          <ol>
            <li>Logical Reasoning</li>
            <li>English Comprehension</li>
          </ol>
          <p>
            <b>Duration: </b>
            <span>60 minutes.</span>
          </p>
          <p>
            <b>Mode: </b>
            <span>Online AI Proctored.</span>
          </p>
          <p>
            <b>Bilingual: </b>
            <span>English and Tamil.</span>
          </p>
        </div>
        <div className={styles.row}>
          <img src="/assets/Frame-53141.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
