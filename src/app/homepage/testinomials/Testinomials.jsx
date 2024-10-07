import styles from './Testinomials.module.css';
import Image from "next/image";

const testimonials = [
  {
    text: "VMLS boasts exceptional infrastructure that greatly enhances the learning experience. The state-of-the-art library, modern classrooms, and impressive moot court hall provide students with invaluable resources and practical skills. The college's commitment to safety and security further ensures a conducive environment for academic growth. Highly recommended!",
    name: "Keerthana R",
    role: "B.Com LLB. (Hons.) II Year",
    image: "/Frame34.png",
  },
  {
    text: "Studying at VMLS has been a transformative experience. The faculty's expertise and dedication to our success are unparalleled. The rigorous curriculum, combined with practical training through Moot Court competitions and Internships, has equipped me with the skills and confidence to excel in the legal profession.",
    name: "Tharaneesh Kanna AC",
    role: "B.A LLB. (Hons.) II Year",
    image: "/Frame-testi-2.png",
  },
  {
    text: "Attending VMLS has been an enriching experience. The diverse student body, collaborative learning environment, and vibrant extracurricular activities have fostered a well-rounded legal education.",
    name: "M. Navitha",
    role: "B.A LLB. (Hons.) II Year",
    image: "/Frame-testi-3.png",
  },
  {
    text: "The college's strong focus on ethical values, professionalism, and social justice has instilled in me a deep sense of responsibility as a future lawyer. The outstanding faculty, state-of-the-art facilities, and interactive teaching methodologies have prepared me to tackle complex legal issues with confidence.",
    name: "Neevetha N",
    role: "LLB. (Hons.) II Year",
    image: "/neevetha-n.png",
  }
];

function Testinomials() {
  return (
    <div className={styles.grid}>
      {testimonials.map((testimonial, index) => (
        <div className={styles.card} key={index}>
          <p className={styles.text}>{testimonial.text}</p>
          <div className={styles.profile}>
            <Image
              className={styles.avatar}
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
            />
            <div className={styles.details}>
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testinomials;
