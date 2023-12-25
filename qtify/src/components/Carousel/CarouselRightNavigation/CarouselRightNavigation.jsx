import styles from "./CarouselRightNavigation.module.css"
import { ReactComponent as RightArrow } from "../../../assets/rightarrow.svg";
import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";


function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsEnd(swiper.isEnd);
        })
    }, [])


    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )    
}

export default CarouselRightNavigation;