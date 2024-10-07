import styles from './Contact-us.module.css';

const ContactUsPage = () => {
  return (
    <div className={styles.contactUsPage}>
      <div className={styles.row}>
        <ContactInfo
          title="VMLS Campus Address"
          content="Vinayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road), Paiyanoor, Chennai- 603104 Tamil Nadu, India"
        />
        <ContactInfo
          title="For Admissions"
          content={
            <>
              18003094350 | 7358201234 <br />
              <a href="mailto:admissions@vmls.edu.in">admissions@vmls.edu.in</a>
            </>
          }
        />
        <ContactInfo
          title="VMLS Campus Address"
          content="New No: 213, Old No: 160, Behind Doshi Tower, Poonamallee High Road, Kilpauk, Chennai-600 010, Tamil Nadu, India."
        />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.innercolumn}>
            <h3>Get to know us</h3>
            <ContactForm />
          </div>
          <div className={styles.innercolumn}>
            <img src="/assets/sch&contact/03.png" alt="Contact Us" />
          </div>
        </div>
        <div className={styles.column}>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ title, content }) => (
  <div className={styles.content}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const ContactForm = () => {
  return (
    <form action="#" method="post">
      <FormInput type="text" id="name" name="name" placeholder="Enter your Name*" required />
      <FormInput type="email" id="email" name="email" placeholder="Enter your email address*" required />
      <FormInput type="tel" id="phone" name="phone" placeholder="Enter your Mobile number" />
      <div className={styles.formGroup}>
        <FormSelect id="state" name="state" options={stateOptions} placeholder="Select State" />
        <FormSelect id="city" name="city" options={cityOptions} placeholder="Select City" />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

const FormInput = ({ type, id, name, placeholder, required }) => (
  <div className={styles.formGroup}>
    <input type={type} id={id} name={name} placeholder={placeholder} required={required} />
  </div>
);

const FormSelect = ({ id, name, options, placeholder }) => (
  <select id={id} name={name}>
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const stateOptions = [
  "Andhra Pradesh",
  "Bihar",
  "Gujarat",
  "Karnataka",
  "Maharashtra",
  "Punjab",
  "Tamil Nadu",
  "Uttar Pradesh",
];

const cityOptions = [
  "Ahmedabad",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "Pune",
];

const MapEmbed = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31142.940162682236!2d80.180111!3d12.65669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666a3b419c71%3A0xbf0f1882c4b4ceb1!2sAARUPADAI%20VEEDU%20INSTITUTE%20OF%20TECHNOLOGY!5e0!3m2!1sen!2sus!4v1707803925344!5m2!1sen!2sus"
    width="99%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

export default ContactUsPage;
