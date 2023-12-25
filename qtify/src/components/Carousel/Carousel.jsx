import styles from "./Carousel.module.css"
import { Navigation } from 'swiper/modules';
import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function Carousel({data, renderComponent}) {

    const Controls = ({ data }) => {
        const swiper = useSwiper();
        useEffect(() => {
            swiper.slideTo(0);
        }, [data])
        return <></>
    }


    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{padding: "0 20px"}}
                initialSlide={0}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={"auto"}
                allowTouchMove
            >   
                <Controls data={data} />
                <CarouselRightNavigation />
                <CarouselLeftNavigation />
                {data.map((ele, idx) => (
                    <SwiperSlide key={idx} >{renderComponent(ele)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
 

}

export default Carousel;