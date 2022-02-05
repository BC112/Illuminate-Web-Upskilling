import styles from './header.module.css';

const Header = () => {
  const navigation = ["Home", "Pages", "Products", "Blog", "Shop", "Contact"]
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.hekto}>Hekto</div>
        {navigation.map((e, i) => { 
          return <span key={i}>{e}</span>
        })}
      </div>
      <div className={styles.rightContainer}>
        <input className={styles.search} type="text" />
        {/* <img src={require("/searchIcon.svg")}></img> */}
        <div className={styles.searchImage}>
        <img src='http://localhost:3000/images/searchIcon.svg'></img>
        </div>
      </div>
    </div>
  )
}

export default Header;
