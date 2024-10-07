"use client";

import { useEffect, useState } from "react";
import styles from "../AdvisorsPages.module.css";

const FacultyProfile = ({ params }) => {
  const { id } = params;
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchFacultyData = async () => {
        const response = await fetch("/data/leadershipData.json");
        const data = await response.json();
        const member = data.find((item) => item.id === id);
        setFaculty(member);
      };

      fetchFacultyData();
    }
  }, [id]);

  if (!faculty) return null;

  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.academicsSec1}>
          <div className={styles.row}>
            <div className={styles.imageContainer}>
              <img src={faculty.image} alt="Faculty image" />
            </div>
            <div className={styles.title}>
              <h3 className={styles.facultyName}>{faculty.name}</h3>
              <p className={styles.facultyTitle}>{faculty.title}</p>
            </div>
          </div>
          <div className={styles.floatRow}>
            {faculty.description.map((text, index) => (
              <p key={index} className={styles.facultyDescription}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
