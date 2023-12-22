import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";


function Navbar({placeholder, searchData}) {

    return (
       <div className={styles.navbarContainer}>
            <Link to="/" >
                <Logo />
            </Link>
            <Search 
                placeholder={placeholder}
                searchData={searchData}
            />
            <Button>Give Feedback </Button>
       </div>
    )
}

export default Navbar;