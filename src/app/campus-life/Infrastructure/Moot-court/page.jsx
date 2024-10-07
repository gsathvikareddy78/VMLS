import styles from "../classroom/Infrapages.module.css";

const images = [
  { src: "/assets/infra/mcourt1.jpg", alt: "Moot Court 1" },
  { src: "/assets/infra/mcourt2.jpg", alt: "Moot Court 2" },
  { src: "/assets/infra/mcourt3.jpg", alt: "Moot Court 3" },
  {
    src: "/assets/infra/mcourt4.jpg",
    alt: "Moot Court 4",
    heading: "Moot Court",
  },
];

const ClassroomPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.classroom}>
        <div className={styles.rowClassroom}>
          <div className={styles.columnClassroom}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageCroom}>
                <img src={image.src} alt={image.alt || ""} />
                {image.heading && (
                  <h4 className={styles.heading}>{image.heading}</h4>
                )}
              </div>
            ))}
          </div>
          <div className={styles.columnClassroom}>
            <p>
              The VMLS Moot Court is a state-of-the-art facility designed to
              simulate real-world legal proceedings, providing students with a
              practical environment to develop their advocacy skills. Here’s a
              formal overview of the moot court:
            </p>
            <p>
              <b>Professional Setup:</b> VMLS boasts a professional moot court
              setup, complete with a well-organized seating arrangement that
              mirrors an actual courtroom, enhancing the realism of the
              simulation.
            </p>
            <p>
              <b>Educational Tool:</b> The moot court serves as an educational
              platform where law students can practice and improve their legal
              argumentation, case analysis, and public speaking abilities.
            </p>
            <p>
              <b>Technological Advancements:</b> The facility is equipped with
              modern technology to record proceedings, allowing for later review
              and critique, which is essential for the students’ learning
              process.
            </p>
            <p>
              <b>Community Engagement:</b> It also acts as a venue for hosting
              moot court competitions, inviting participation from various law
              schools, thereby fostering a competitive yet collaborative
              learning environment.
            </p>
            <p>
              The VMLS Moot Court is a testament to the institution’s commitment
              to providing a comprehensive legal education that extends beyond
              theoretical knowledge to include essential practical experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
