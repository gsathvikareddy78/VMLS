"use client";
import React, { useState } from "react";
import styles from "./Header1.module.css";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    admissions: false,
    leadership: false,
    faculty: false,
    campusLife: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (key) => {
    setDropdowns((prevState) => {
      const newState = {
        about: false,
        admissions: false,
        leadership: false,
        faculty: false,
        campusLife: false,
      };
      return { ...newState, [key]: !prevState[key] };
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.contactInfo}>
        <span>+91 7358201234 | admissions@vmls.edu.in</span>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.menuButton} onClick={toggleMenu}>
        <svg
  className={`${styles.hamburgerIcon} ${styles.hamburgerIcon3}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
>
  <rect y="5" width="24" height="2" rx="1" />
  <rect y="11" width="24" height="2" rx="1" />
  <rect y="17" width="24" height="2" rx="1" />
</svg>
<svg
  className={`${styles.hamburgerIcon} ${styles.hamburgerIcon2}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 30"
  width="6.5vw"
  height="6vw"
  fill="none"
>
  <rect y="1" width="120" height="5.5" rx="2" />
  <rect y="40" width="120" height="5.5" rx="2" />
</svg>

          <span>MENU</span>
        </div>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <div className={styles.navContent}>
          <ul className={styles.navUl}>
            <li>
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("about");
                }}
              >
                About <span className={styles.arrowDown}>&#9660;</span>
              </Link>
              <ul
                className={`${styles.dropdown} ${
                  dropdowns.about ? styles.dropdownOpen : ""
                }`}
              >
                <li>
                  <Link href="/About-us/About-vmrf" onClick={handleLinkClick}>
                    About VMRF <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/About-us/About-vmls" onClick={handleLinkClick}>
                    About VMLS <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About-us/Dr.A.Shanmugasundaram"
                    onClick={handleLinkClick}
                  >
                    Founder <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About-us/Dr.A.S.Ganesan"
                    onClick={handleLinkClick}
                  >
                    Chancellor <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About-us/Dr.AnanthPadmanabhan"
                    onClick={handleLinkClick}
                  >
                    Dean <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("admissions");
                }}
              >
                Admission <span className={styles.arrowDown}>&#9660;</span>
              </Link>
              <ul
                className={`${styles.dropdown} ${
                  dropdowns.admissions ? styles.dropdownOpen : ""
                }`}
              >
                <li>
                  <Link
                    href="/Admission/How-to-Apply"
                    onClick={handleLinkClick}
                  >
                    Admission Process{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Scholarship" onClick={handleLinkClick}>
                Scholarships
              </Link>
            </li>
            <li>
              <Link href="/Collaborations" onClick={handleLinkClick}>
                Collaborations
              </Link>
            </li>
            <li>
              <Link href="/Academics" onClick={handleLinkClick}>
                Academics
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("leadership");
                }}
              >
                Leadership <span className={styles.arrowDown}>&#9660;</span>
              </Link>
              <ul
                className={`${styles.dropdown} ${
                  dropdowns.leadership ? styles.dropdownOpen : ""
                }`}
              >
                <li>
                  <Link
                    href="/Leadership/BoardOfAdvisors"
                    onClick={handleLinkClick}
                  >
                    Board of Advisors{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Leadership/Mentoring-committee"
                    onClick={handleLinkClick}
                  >
                    Mentoring Committee{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("faculty");
                }}
              >
                Faculty <span className={styles.arrowDown}>&#9660;</span>
              </Link>
              <ul
                className={`${styles.dropdown} ${
                  dropdowns.faculty ? styles.dropdownOpen : ""
                }`}
              >
                <li>
                  <Link
                    href="/Faculty/Faculty-Profiles"
                    onClick={handleLinkClick}
                  >
                    Faculty Profiles{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faculty/Achievements" onClick={handleLinkClick}>
                    Faculty Achievements{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={handleLinkClick}>
                    Guest Lecturers{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("campusLife");
                }}
              >
                Campus Life <span className={styles.arrowDown}>&#9660;</span>
              </Link>
              <ul
                className={`${styles.dropdown} ${
                  dropdowns.campusLife ? styles.dropdownOpen : ""
                }`}
              >
                <li>
                  <Link
                    href="/campus-life/Infrastructure"
                    onClick={handleLinkClick}
                  >
                    Infrastructure{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={handleLinkClick}>
                    Campus Support{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={handleLinkClick}>
                    Clubs and Committees{" "}
                    <span className={styles.greaterThan}>&gt;</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact/governance" onClick={handleLinkClick}>
                Governance and Policy
              </Link>
            </li>
            <li>
              <Link href="/Contact-us" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.menuMainRight}>
          <div className={styles.menuMainRightRow1}>
            <img src="/group-frame@2x.jpg" alt="image" className={styles.image1} />
            <div className={styles.closeBtn} onClick={handleCloseMenu}>
              <img src="/x.svg" alt="close button" />
              <p>CLOSE</p>
            </div>
          </div>
          <div className={styles.menuMainRightRow2}>
            <div className={styles.imageBox}>
              <div className={styles.imgBoxContent}>
                <div>
                  <p>
                    <span>18 Nov 2023</span>
                    <span>Guest lecture</span>
                  </p>
                  <h3>Guest Lecture: Legal Awareness Rally</h3>
                </div>
                <p>
                  Dive into the transformative journey of court digitization
                  with VMLS's Center for Justice through Technology. Join us as
                  we explore the visionary strides of Justice S. Muralidhar.
                </p>
              </div>
              <div className={styles.imgBoxImg}>
                <img src="/rectangle-4@2x.jpg" alt="image" />
              </div>
            </div>

            <div className={styles.imageBox}>
              <div className={styles.imgBoxContent}>
                <div>
                  <p>18 Nov 2023</p>
                  <h3>Legal Literacy Camp</h3>
                </div>
                <p>
                  In commemoration of Constitutional Day, VMLS Global Tamil Law
                  Center (GTLC) organized a legal literacy camp, aligning with
                  the vision of Dr. B.R. Ambedkar to transform political
                  democracy into social democracy.
                </p>
              </div>
              <div className={styles.imgBoxImg}>
                <img src="/image-93@2x.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;