import styles from "./Infrastructure.module.css";
import infraData from "../../data/infrastructureData.json"; 
import Link from 'next/link';

const Infrastructure = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.headingContainer}>
        <h3 className={styles.headingText1}>Infrastructure</h3>
      </div>
      <div className={styles.section6Row}>
        {infraData.map((infra, index) => (
          <div key={index} className={styles.columnInfra}>
            <div className={styles.imageInfra}>
              <img src={infra.imgSrc} alt={infra.alt} />
            </div>
            <div className={styles.floatInfra}>
              <div className={styles.linkInfra}>
              <Link href={infra.href} className={styles.readMore}>READ MORE
                </Link>
              </div>
              <div className={styles.innerContentInfra}>
                <h4>{infra.title}</h4>
                <p>{infra.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;
