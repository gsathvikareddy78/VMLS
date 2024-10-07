import styles from "../classroom/Infrapages.module.css";

const ClassroomPanel = () => {
  const images = [
    { src: "/assets/infra/atrium1.jpg", alt: "Atrium Image 1" },
    { src: "/assets/infra/atrium2.jpg", alt: "Atrium Image 2" },
    { src: "/assets/infra/atrium3.jpg", alt: "Atrium Image 3" },
    {
      src: "/assets/infra/atrium4.jpg",
      alt: "Atrium Image 4",
      heading: "ATRIUM",
    },
  ];

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
              The atrium of VMLS fosters an atmosphere that is both inviting and
              conducive to academic pursuits. The high ceiling and large open
              space are not just aesthetically pleasing but also promote a sense
              of freedom and possibility, essential for creative thinking.
              Natural light bathes the area, creating a bright and energizing
              environment that enhances student efficiency. The thoughtful
              arrangement of tables and chairs allows for both individual study
              and collaborative work, ensuring that students can find a space
              that suits their learning style. With a wide aisle and
              unobstructed pathways, the atrium is highly accessible, allowing
              for easy movement and interaction among students, which is vital
              for a dynamic educational experience. Overall, the atrium’s design
              reflects a deep understanding of the needs of students, blending
              form with function to create an optimal learning environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
