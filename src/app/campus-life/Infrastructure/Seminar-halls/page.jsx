import styles from "../classroom/Infrapages.module.css";

const ClassroomPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.classroom}>
        <div className={styles.rowClassroom}>
          <div className={styles.columnClassroom}>
            <div className={styles.imageCroom}>
              <img src="/assets/infra/shall1.jpg" alt=" " />
            </div>
            <div className={styles.imageCroom}>
              <img src="/assets/infra/shall2.jpg" alt=" " />
            </div>
            <div className={styles.imageCroom}>
              <img src="/assets/infra/shall3.jpg" alt=" " />
            </div>
            <div className={styles.imageCroom}>
              <img src="/assets/infra/Frame-531382.jpg" alt="" />
              <h4 className={styles.heading}>Seminar Halls</h4>
            </div>
          </div>
          <div className={styles.columnClassroom}>
            <p>
              The VMLS Seminar Hall is a modern facility designed to host a
              variety of academic and professional events.
            </p>
            <p>
              <b>Modern Amenities:</b> The hall is equipped with
              state-of-the-art audio-visual equipment, ensuring high-quality
              presentations and interactive sessions.
            </p>
            <p>
              <b>Spacious Design:</b> With ample seating and a well-lit
              environment, the seminar hall provides a comfortable setting for
              attendees to engage in learning and discussion.
            </p>
            <p>
              <b>Versatile Use:</b> It serves as a venue for seminars, lectures,
              conferences, and workshops, supporting the institution’s
              commitment to continuous learning and knowledge sharing
            </p>
            <p>
              <b>Collaborative Space:</b> The seminar hall is also a space for
              collaboration, where students, faculty, and industry professionals
              can come together to exchange ideas and insights.
            </p>
            <p>
              The VMLS Seminar Hall is a testament to the institution’s
              dedication to providing top-tier educational facilities that
              enhance the learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPanel;
