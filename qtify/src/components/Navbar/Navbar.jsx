import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css"

function Navbar({placeholder}) {


    return (
       <div className={styles.navbarContainer}>
            <Logo />
            <Search placeholder={placeholder}/>
            <Button>Give Feedback </Button>
       </div>
    )
}

export default Navbar;