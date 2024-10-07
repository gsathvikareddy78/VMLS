import styles from './Scholarship.module.css';

const Scholarships = () => {
  return (
    <div className={styles.scholarships}>
      <div className={styles.row}>
        <h3>Scholarships</h3>
        <div className={styles.scholarImage}>
          <img
            src="/01.png"
            alt="Scholarship Image 1"
          />
        </div>
        <ul className={styles.list}>
          <li>
            Total of 140+ Scholarships worth 60 Lakhs are available for
            deserving candidates through VLAT.
          </li>
          <li>
            For more information on the scholarship criteria and
            eligibility, connect with our Program Advisor.
          </li>
        </ul>
      </div>
      <div className={styles.row} >
        <img
          src="/02.png"
          alt="Scholarship Image 2"
          className={styles.fullImage}
        />
      </div>
    </div>
  );
};

export default Scholarships;