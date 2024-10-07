"use client";

import { useEffect, useState } from "react";
import styles from "../FacultyPages.module.css";

const FacultyProfile = ({ params }) => {
  const { id } = params;
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchFacultyData = async () => {
        const response = await fetch("/data/facultyData.json");
        const data = await response.json();
        const member = data.find((item) => item.id === id);
        setFaculty(member);
      };

      fetchFacultyData();
    }
  }, [id]);

  if (!faculty) return ;

  return (
    <div className={styles.panel}>
      <div className={`${styles.academics} ${styles.acadSingle}`}>
        <div className={styles.academicsSec1}>
          <div className={styles.row}>
            <img src={faculty.image} alt="image" className={styles.facultyImage} />
            <h3 className={styles.facultyName}>{faculty.name}</h3>
            <p className={styles.facultyTitle}>{faculty.title}</p>
          </div>
          <div className={styles.floatRow}>
            {faculty.description.map((text, index) => (
              <p key={index} className={styles.facultyDescription}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
