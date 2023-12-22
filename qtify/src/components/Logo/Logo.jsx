import styles from "./Logo.module.css"
import QtifyLogo  from "../../assets/logo.png";

function Logo() {


    return (
       <div className={styles.logoContainer}>
            <img className={styles.logoIcon} src={QtifyLogo} alt="" />
       </div>
    )
}

export default Logo;