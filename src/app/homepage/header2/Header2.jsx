import styles from "./Header2.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="/logo.png"
        alt="VMLS logo"
        width={300}
        height={100}
        className={styles.leftImage}
      />
      <img
        src="/vmls.png"
        alt="VMLS logo"
        width={200}
        height={70}
        className={styles.rightImage}
      />
    </div>
  );
};

export default Header;
