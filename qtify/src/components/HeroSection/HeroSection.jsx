import styles from "./HeroSection.module.css"
import headphoneIcon from "../../assets/headphone.png"
function HeroSection() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContentWrapper}>
                    <div className={styles.heroLeftContent}>
                        <h1>100 Thousand Songs, ad-free</h1>
                        <h1>Over thousands podcast episodes</h1>
                    </div>
                    <div className={styles.heroRightContent}>
                        <img  className={styles.heroIcon} src={headphoneIcon} alt="Headphone" />
                    </div>
            </div>
        </div>
    )
}

export default HeroSection;