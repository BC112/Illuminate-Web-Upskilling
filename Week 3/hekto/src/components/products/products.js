import styles from './products.module.css';

const Products = () => {
  const featuredImages = ["http://localhost:3000/images/featured1.png", "http://localhost:3000/images/featured2.png", "http://localhost:3000/images/featured3.png", "http://localhost:3000/images/featured4.png"];
  const productTypes = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const latestImages = ["http://localhost:3000/images/latest1.png", "http://localhost:3000/images/latest2.png", "http://localhost:3000/images/latest3.png", "http://localhost:3000/images/latest4.png", "http://localhost:3000/images/latest5.png", "http://localhost:3000/images/latest6.png"];
  const offerImages = ["http://localhost:3000/images/free-delivery.png", "http://localhost:3000/images/cashback.png", "http://localhost:3000/images/premium-quality.png", "http://localhost:3000/images/24-hours-support.png"] 
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>Featured Products</div>
      <div className={styles.productsContainer}>
        {featuredImages.map((e, i) => {
          return (
            <div className={styles.featuredImageContainer}>
              <div className={styles.featuredTopBox}>
                <img src={e} key={i}></img>
              </div>
              <div className={styles.featuredBottomBox}>
                <div className={styles.productName}>Cantilever chair</div>
                <div className={styles.productCode}>Code - Y523201</div>
                <div className={styles.productPrice}>$42.00</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.title}>Latest Products</div> 
      <div className={styles.productTypeBox}>
        {productTypes.map((e, i) => {
          if (e === "New Arrival") {
            return <div className={`${styles.underline} ${styles.productType}`} key={i}>{e}</div>  
          } 
          return <div className={styles.productType} key={i}>{e}</div>
        })}
      </div>
      <div className={styles.productsContainer}>
        {latestImages.map((e, i) => {
          return (
            <div className={styles.productContainer}>
              <div className={styles.latestTopBox}>
                <img src={e} key={i}></img>
              </div>
              <div className={styles.latestBottomBox}>
                <div className={styles.latestLeftBox}>
                  <div className={styles.latestDescription}>Comfort Handy Craft</div>
                </div>
                <div className={styles.latestRightBox}>
                  <div className={styles.latestNewPrice}>$42.00</div>
                  <div className={styles.latestOldPrice}>$65.00</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.title}>What Shopex Offers!</div>
      <div className={styles.productsContainer}>
        {offerImages.map((e, i) => {
          return (
            <div className={styles.offerImageContainer}>
              <div>
                <img src={e} key={i}></img>
              </div>
              <div className={styles.subtitle}>24/7 Support</div>
              <div className={styles.offerInformation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products;