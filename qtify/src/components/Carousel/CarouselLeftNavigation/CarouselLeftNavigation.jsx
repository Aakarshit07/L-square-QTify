import styles from "./CarouselLeftNavigation.module.css"
import { ReactComponent as LeftArrow } from "../../../assets/leftarrow.svg";
import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";

function CarouselLeftNavigation() {
    
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBeginning(swiper.isBeginning);
        })
    }, [])


    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )    
}

export default CarouselLeftNavigation;