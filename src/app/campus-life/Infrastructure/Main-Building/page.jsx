import styles from "../classroom/Infrapages.module.css";

const images = [
  { src: "/assets/infra/mb1.jpg", alt: "Main Building 1" },
  { src: "/assets/infra/mb2.jpg", alt: "Main Building 2" },
  { src: "/assets/infra/mb3.jpg", alt: "Main Building 3" },
  {
    src: "/assets/infra/mb4.jpg",
    alt: "Main Building 4",
    heading: "Main Building",
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
              The main building of VMLS stands as a striking example of modern
              architecture, where functionality meets aesthetic precision. The
              clear lines and geometric forms of the structure embody the
              principles of modernity and order, reflecting an ethos of clarity
              and efficiency. The brown brick facade offers a nod to traditional
              construction, while the white rectangular structure above the
              entrance signifies the school's forward-thinking vision. The white
              pillars at the entrance evoke a sense of grandeur, framing the
              gateway to knowledge. This blend of materials and design elements
              results in a building that is not only a place of learning but
              also a testament to the enduring influence of modern architectural
              philosophy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
