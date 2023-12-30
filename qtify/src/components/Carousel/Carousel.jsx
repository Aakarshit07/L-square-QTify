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

    // console.log("Carousel->:data ", data)
    // console.log("Carousel->:renderComponent ", renderComponent);

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
                {data.map((ele) => {
                    // console.log("Carousel->:renderComponent ", ele);
                    return <SwiperSlide key={ele.id} >{renderComponent(ele)}</SwiperSlide>
                })}
            </Swiper>
        </div>
    )
 

}

export default Carousel;