"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Footer.module.css"; 

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear errors on input change
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    // Basic phone number validation (10 digits)
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validation logic
    if (!formData.name) {
      setErrors((prev) => ({ ...prev, name: 'Name is required' }));
      isValid = false;
    }
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      isValid = false;
    }
    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: 'Phone number must be 10 digits' }));
      isValid = false;
    }

    // If valid, reset form
    if (isValid) {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: ''
      });
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerRow}>
        <img
          className="footer-logo"
          src="/fotter-logo.png"
          alt="image"
        />
        <h3>Law School of the Future</h3>
        <div className={styles.socialLinks}>
          <a href="#">
            <Image src="/assets/last/icons8-facebook 1.png" alt="Facebook" width={25} height={33} />
          </a>
          <a href="#">
            <Image src="/assets/last/icons8-instagram 1.png" alt="Instagram" width={25} height={30} />
          </a>
          <a href="#">
            <Image src="/assets/last/Vector.png" alt="LinkedIn" width={25} height={25}/>
          </a>
          <a href="#">
            <Image src="/assets/last/icons8-twitter 1.png" alt="Twitter" width={25} height={25} />
          </a>
        </div>
      </div>

      <div className={`${styles.footerRow} ${styles.addressRow}`}>
        <div className={styles.footClmn}>
          <div className={styles.headingFoot}>
            <span>
              <img src="/assets/last/map.png" alt="Map"  />
              <h4>VMLS Campus Address</h4>
            </span>
          </div>
          <p>Nayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road), Paiyanoor, Chennai-603104 Tamil Nadu, India</p>
        </div>

        <div className={styles.footClmn}>
          <div className={styles.headingFoot}>
            <span>
              <img src="/assets/last/map.png" alt="Map" />
              <h4>Corporate Office Address</h4>
            </span>
          </div>
          <p>No: 213, Old No: 160, Behind Doshi Tower, Poonamallee High Road, Kilpauk, Chennai-600010, Tamil Nadu, India</p>
        </div>
      </div>

      <div className={`${styles.footerRow} ${styles.contactUs}`}>
        <h4>Contact Us</h4>
        <div className={styles.headingFoot}>
          <span>
            <Image src="/assets/last/phone.png" alt="Phone" width={20} height={20} />
            <p>18003094350 | 7358201234</p>
          </span>
        </div>
        <div className={styles.headingFoot}>
          <span>
            <Image src="/assets/last/email.png" alt="Email" width={20} height={20} />
            <p>admissions@vmls.edu.in</p>
          </span>
        </div>
      </div>

      <div className={styles.footerRow}>
        <h3>Get to know us</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your Mobile number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
          <div className={styles.formGroup}>
            <select id="state" name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Punjab">Punjab</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
            <select id="city" name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <span className={styles.footBottom}>
        <a href="#">Refund Policy</a>
        <a href="#">Anti Ragging Committee</a>
        <a href="#">Anti Ragging Measures</a>
      </span>
    </div>
  );
}

export default Footer;
