import styles from './feature.module.css';

const Feature = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img src="http://localhost:3000/images/blue-couch.png"></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.title}>Unique Features of Latest &amp; Trending Products</div>
        <div className={styles.bulletPointsContainer}>
          <div className={styles.bulletPointContainer}>
            <img src="http://localhost:3000/images/Ellipse 65.svg" className={styles.dot}></img>
            <span className={styles.bulletPoint}>
              All frames constructed with hardwood solids and laminates
            </span>
          </div>
          <div className={styles.bulletPointContainer}>
            <img src="http://localhost:3000/images/Ellipse 66.svg" className={styles.dot}></img>
            <span className={styles.bulletPoint}>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </span>
          </div>
          <div className={styles.bulletPointContainer}>
            <img src="http://localhost:3000/images/Ellipse 67.svg" className={styles.dot}></img>
            <span className={styles.bulletPoint}>
              Arms, backs and seats are structurally reinforced
            </span>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.addCartButton}>Add To Cart</div>
          <div className={styles.bottomText}>
            <div className={styles.sofaDescription}>B&amp;B Italian Sofa</div>
            <div className={styles.price}>$32.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;