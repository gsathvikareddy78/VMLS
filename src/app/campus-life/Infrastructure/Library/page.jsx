import styles from "../classroom/Infrapages.module.css";

const ClassroomPanel = () => {
  const images = [
    { src: "/assets/infra/library1.jpg", alt: "Library Image 1" },
    { src: "/assets/infra/library2.jpg", alt: "Library Image 2" },
    { src: "/assets/infra/library3.jpg", alt: "Library Image 3" },
    {
      src: "/assets/infra/library4.jpg",
      alt: "Library Image 4",
      heading: "Library",
    },
  ];

  const features = [
    {
      title: "Collection Diversity",
      description:
        "The library houses an extensive collection of books across various genres and disciplines, catering to a wide spectrum of academic and personal interests.",
    },
    {
      title: "Technological Resources",
      description:
        "Equipped with advanced computer systems and high-speed internet access, the library provides patrons with digital research tools and a comprehensive digital catalog.",
    },
    {
      title: "Architectural Design",
      description:
        "The library’s design emphasizes both aesthetic appeal and functional utility, featuring spacious reading areas with ambient lighting conducive to study and learning.",
    },
    {
      title: "Climate Control",
      description:
        "A fully air-conditioned environment ensures comfortable access to resources throughout the year.",
    },
    {
      title: "Community Engagement",
      description:
        "The library serves as a community hub, hosting regular workshops, author meets, and book discussions to encourage the exchange of ideas and collective learning.",
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
              The VMLS Library represents a significant advancement in the
              integration of traditional library services with cutting-edge
              technology. This report outlines the facilities and features that
              position the VMLS Library as a modern and technologically advanced
              resource center.
            </p>
            {features.map((feature, index) => (
              <p key={index}>
                <b>{feature.title}:</b> {feature.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
