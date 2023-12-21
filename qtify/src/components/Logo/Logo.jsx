import styles from "./Logo.module.css"
import QtifyLogo  from "../../assets/logo.png";

function Logo() {


    return (
       <div className={styles.logoContainer}>
            <img className={styles.logoIcon} src={QtifyLogo} alt="" />
            {/* <h3 className={styles.logoText}>Q tify</h3> */}
       </div>
    )
}

export default Logo;