import React from "react";
import Link from "next/link";
import advisorData from '../../data/advisorData.json';
import styles from "./BoardOfAdvisors.module.css";

const JusticeCard = () => {
  return (
    <div className={styles.container}>
      {advisorData.map((advisor, index) => (
        <div key={index} className={styles.card}>
          <Link href={advisor.link}>
            <div>
              <img
                src={advisor.image}
                alt={advisor.name}
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.name}>{advisor.name}</h3>
              <p className={styles.description}>{advisor.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JusticeCard;
