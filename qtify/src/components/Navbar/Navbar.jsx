import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css"

function Navbar() {


    return (
       <div className={styles.navbarContainer}>
            <Logo />
            <Search placeholder={"Search a album of your choice"}/>
            <Button>Give Feedback </Button>
       </div>
    )
}

export default Navbar;