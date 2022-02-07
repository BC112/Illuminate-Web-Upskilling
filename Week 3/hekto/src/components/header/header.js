import styles from './header.module.css';

const Header = () => {
  const navigation = ["Home", "Pages", "Products", "Blog", "Shop", "Contact"]
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.hekto}>Hekto</div>
        {navigation.map((e, i) => {
          if (e === "Home") {
            return (
              <span className={styles.highlight} key={i}>
                {e}
                <img src="http://localhost:3000/images/Vector.svg" className={styles.vector}></img>
              </span>
            )
          }
          return <span key={i}>{e}</span>
        })}
      </div>
      <div className={styles.rightContainer}>
        <input className={styles.search} type="text" />
        <div className={styles.searchImage}>
        <img src='http://localhost:3000/images/searchIcon.svg'></img>
        </div>
      </div>
    </div>
  )
}

export default Header;
