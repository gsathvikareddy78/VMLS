import styles from "../classroom/Infrapages.module.css";

const ClassroomPanel = () => {
  const images = [
    { src: "/assets/infra/foodc1.jpg", alt: "Food Court Image 1" },
    { src: "/assets/infra/foodc2.jpg", alt: "Food Court Image 2" },
    { src: "/assets/infra/foodc3.jpg", alt: "Food Court Image 3" },
    {
      src: "/assets/infra/atrium4.jpg",
      alt: "Food Court Image 4",
      heading: "Food Court",
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
              The VMLS food courts are designed to cater to the diverse culinary
              preferences and economic backgrounds of the student body. Here’s a
              formal overview:
            </p>
            <p>
              <b>Variety of Cuisines:</b> The air-conditioned food court offers
              a range of international cuisines, including Italian, Continental,
              Chinese, and Indian, providing a rich dining experience.
            </p>
            <p>
              <b>Subsidized Options:</b> The canteen provides subsidized meals,
              ensuring that students from all economic backgrounds have access
              to affordable, nutritious food.
            </p>
            <p>
              <b>Inclusive Environment:</b> With two distinct food courts, VMLS
              demonstrates a commitment to inclusivity, addressing the varied
              needs of the student community.
            </p>
            <p>
              The food courts at VMLS not only serve as a place for nourishment
              but also as social hubs where students can gather, share meals,
              and build community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
