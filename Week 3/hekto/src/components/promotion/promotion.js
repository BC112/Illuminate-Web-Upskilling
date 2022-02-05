import styles from './promotion.module.css';

const Promotion = () => (
  <div className={styles.container}>
    <div className={styles.leftContainer}>
      <div className={styles.middleContainer}>
        <div className={styles.top}>Best Furniture For Your Castle....</div>
        <div className={styles.middle}>New Furniture Collection</div>
        <div className={styles.middle}>Trends in 2020</div>

        <div className={styles.bottom}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <button className={styles.shopNowBtn}>Shop Now</button>
      </div>
    </div>
    <div className={styles.rightContainer}>
      <img
        className={styles.sofa}
        src="http://localhost:3000/images/heroChair.png"
        alt="hero chair"
      ></img>
    </div>
  </div>
);

export default Promotion;