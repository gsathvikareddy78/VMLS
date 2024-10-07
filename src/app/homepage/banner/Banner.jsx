import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <Image
          src="/frame-1@3x.jpg"
          alt="Vinayaka Mission's Law School"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        <div className={styles.textOverlay}>
          <h2>Law School</h2>
          <h2> of the Future</h2>
        </div>
      </div>

      <div className={styles.mainScreenParent}>
        <div className={styles.mainScreen}>
          <div className={styles.mainScreenLeft}>
            <Image src="/image-7@2x.png" alt="Logo 1" width={200} height={70} />
            <p>
              VMLSV is being mentored by O.P. Jindal Global University (an
              Institution of Eminence) and Jindal Global Law School under an
              institutional mentorship agreement.
            </p>
            <Image
              src="/group-454@2x.png"
              alt="Logo 2"
              width={200}
              height={80}
            />
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.mainScreenRight}>
            <Image src="/image-8@2x.png" alt="Logo 3" width={360} height={65} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
