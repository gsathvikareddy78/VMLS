import styles from "./Infrapages.module.css";

const images = [
  { src: "/assets/infra/class1.jpg", alt: "Class 1" },
  { src: "/assets/infra/class2.jpg", alt: "Class 2" },
  { src: "/assets/infra/class3.jpg", alt: "Class 3" },
  {
    src: "/assets/infra/Frame-531382.jpg",
    alt: "Frame",
    heading: "Classrooms",
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
                <img src={image.src} alt={image.alt} />
                {image.heading && (
                  <h4 className={styles.heading}>{image.heading}</h4>
                )}
              </div>
            ))}
          </div>
          <div className={styles.columnClassroom}>
            <p>
              The classrooms of VMLS are a testament to modern educational
              advancements, blending technology with design to create an
              environment ripe for learning. At the heart of this space is the
              smart TV, a focal point for digital presentations and interactive
              learning sessions. The rooms are also wifi-enabled, ensuring that
              students and educators remain connected to the vast resources of
              the internet. Architecturally, the room’s spacious layout, coupled
              with strategic lighting and acoustics, minimizes distractions and
              promotes an atmosphere of focused study. The thoughtful
              integration of these elements underscores VMLS’s commitment to
              providing a learning space that is not only functional but also
              conducive to the educational journey of its students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
