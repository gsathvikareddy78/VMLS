import styles from "../classroom/Infrapages.module.css";

const ClassroomPanel = () => {
  const images = [
    { src: "/assets/infra/hostel1.jpg", alt: "Hostel Image 1" },
    { src: "/assets/infra/hostel2.jpg", alt: "Hostel Image 2" },
    { src: "/assets/infra/hostel3.jpg", alt: "Hostel Image 3" },
    {
      src: "/assets/infra/mcourt4.jpg",
      alt: "Hostel Image 4",
      heading: "Hostel",
    },
  ];

  const facilities = [
    "Canteen",
    "Gymnasium",
    "Departmental Store",
    "Health Care",
    "Indoor Games",
    "Food Court",
    "Air conditioner",
    "ATM Facility",
    "Wi-Fi",
    "CCTV",
    "Laundry",
    "Visitor's Room",
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
              We provide a comfortable and secure student environment. Our
              hostel offers various room categories to suit your preferences,
              including single, double, triple, and four-sharing room occupancy.
              You can choose between rooms with attached baths for added privacy
              or rooms with common bath facilities. Our commitment to your
              well-being extends beyond accommodation. The campus has high-speed
              Wi-Fi, student safety is our top priority, with 24x7 security
              personnel and surveillance systems in place. We also have an
              in-house doctor on call to address any health concerns promptly.
              To satisfy your culinary needs, a food court is conveniently
              located within the campus. Additionally, an on-site ATM is
              available for your banking convenience.
            </p>
            <p>
              <b>Sir. C. V. Raman Boys Hostel:</b> With a capacity of 700, this
              hostel provides a secure and comfortable home away from home for
              our male students.
            </p>
            <p>
              <b>Ramanujan Boys Hostel:</b> Accommodating up to 500 residents,
              this hostel offers a cozy atmosphere for students to thrive.
            </p>
            <p>
              <b>Kalpana Chawla Girls Hostel:</b> Our girls' hostel, with a
              capacity of 450, is designed with attached bathrooms for added
              convenience and privacy.
            </p>
            <p>
              <b>Our Facilities:</b>
            </p>
            <ul>
              {facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
