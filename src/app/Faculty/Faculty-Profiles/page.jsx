import styles from "./FacultyProfiles.module.css";
import Image from "next/image";

const facultyDetails = [
  {
    name: "Dr. Ananth Padmanabhan",
    title: "Dean",
    image: "/faculty/main/01.png",
    link: "/About-us/Dr.AnanthPadmanabhan",
  },
  {
    id: "02",
    name: "Ms. Chesha P. Chellappan",
    title: "Assistant Professor",
    image: "/faculty/main/02.png",
    link: "/facultyPages/02",
  },
  {
    id: "03",
    name: "Mr. Krishna Kishore Padala",
    title: "Assistant Professor",
    image: "/faculty/main/03.png",
    link: "/facultyPages/03",
  },
  {
    id: "04",
    name: "Ms. Sphurthi Krishna",
    title: "Assistant Professor",
    image: "/faculty/main/04.png",
    link: "/facultyPages/04",
  },
  {
    id: "05",
    name: "Dr. Gnana Sanga Mithra. S",
    title: "Assistant Professor",
    image: "/faculty/main/05.png",
    link: "/facultyPages/05",
  },
  {
    id: "06",
    name: "Ms. Samudyata Sreenath",
    title: "Assistant Professor",
    image: "/faculty/main/07.png",
    link: "/facultyPages/06",
  },
  {
    id: "07",
    name: "Ms. Sinjini Sen",
    title: "Assistant Professor",
    image: "/faculty/main/08.png",
    link: "/facultyPages/07",
  },
  {
    id: "08",
    name: "Dr. Debdulal Thakur",
    title: "Professor of Economics & Public Policy",
    image: "/faculty/main/09.png",
    link: "/facultyPages/08",
  },
  {
    id: "09",
    name: "Ms. Nabeela Siddiqui",
    title: "Assistant Professor",
    image: "/faculty/main/06.png",
    link: "/facultyPages/09",
  },
  {
    id: "10",
    name: "Ms. Gunjan Saxena",
    title: "Assistant Professor",
    image: "/faculty/main/10.png",
    link: "/facultyPages/10",
  },
  {
    id: "11",
    name: "Ms. Aarthy G.",
    title: "Assistant Professor",
    image: "/faculty/main/11.png",
    link: "/facultyPages/11",
  },
  {
    id: "12",
    name: "Mr. Nishant Sheokand",
    title: "Assistant Dean (Academic Affairs)",
    image: "/faculty/main/12.png",
    link: "/facultyPages/12",
  },
  {
    id: "13",
    name: "Ms. Suhasini Rao",
    title:
      "Associate Professor, Director, Centre for Justice Through Technology",
    image: "/faculty/main/13.png",
    link: "/facultyPages/13",
  },
  {
    id: "14",
    name: "Mr. Edhaya Chandran",
    title: "Assistant Professor",
    image: "/faculty/main/14.png",
    link: "/facultyPages/14",
  },
  {
    id: "15",
    name: "Mr. Anand Shrivas",
    title: "Assistant Professor",
    image: "/faculty/main/15.png",
    link: "/facultyPages/15",
  },
  {
    id: "16",
    name: "Mr. Saravanan R",
    title: "Assistant Professor",
    image: "/faculty/main/16.png",
    link: "/facultyPages/16",
  },
  {
    id: "17",
    name: "Ms. Shambhavi Thakur",
    title: "Assistant Professor",
    image: "/faculty/main/17.png",
    link: "/facultyPages/17",
  },
  {
    id: "18",
    name: "Mr. Ananyo Mitra",
    title: "Assistant Professor",
    image: "/faculty/main/18.png",
    link: "/facultyPages/18",
  },
  {
    id: "19",
    name: "Dr. Fowmina",
    title: "Assistant Professor",
    image: "/faculty/main/19.png",
    link: "/facultyPages/19",
  },
  {
    id: "20",
    name: "Dr. Nanthini R.O",
    title: "Assistant Librarian",
    image: "/faculty/main/20.png",
    link: "/facultyPages/20",
  },
  {
    id: "21",
    name: "Ms. Merlin Stephen",
    title: "Office Incharge Dean’s Office",
    image: "/faculty/main/21.png",
    link: "/facultyPages/21",
  },
  {
    id: "22",
    name: "Ms. Sheetal Mary",
    title:
      "Manager - Students Affairs, Academic Planning & Communication and English Language Lab",
    image: "/faculty/main/22.png",
    link: "/facultyPages/22",
  },
  {
    id: "23",
    name: "Mr. Hemanth Chandrashekar",
    title: "Manager - People, Partnerships & Career Support",
    image: "/faculty/main/23.png",
    link: "/facultyPages/23",
  },
];

export default function FacultyComponent() {
  return (
    <div className={styles.panel}>
      {/* First and Second Panels - Optimized to display 5 images per row */}
      <div className={styles.faculty}>
        {facultyDetails.slice(0, 19).map((faculty, index) => (
          <div className={styles.column} key={index}>
            <a href={faculty.link}>
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={300}
                height={300}
              />
              <h3>{faculty.name}</h3>
              <p>{faculty.title}</p>
            </a>
          </div>
        ))}
      </div>

      {/* Third Panel */}
      <div className={styles.panel2}>
        <div className={styles.headingContainer}>
          <h3 className={styles.headingText1}>Team@VMLS</h3>
        </div>
      </div>

      {/* Fourth Row */}
      <div className={styles.faculty}>
        {facultyDetails.slice(19).map((faculty, index) => (
          <div className={styles.column} key={index}>
            <a href={faculty.link}>
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={300}
                height={300}
              />
              <h3>{faculty.name}</h3>
              <p>{faculty.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

