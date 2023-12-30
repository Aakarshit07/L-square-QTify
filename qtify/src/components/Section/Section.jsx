import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({title, data, filterSource, type}) {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{key: "all", label: "All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    
    // console.log("Section->Data: ", data);
    // console.log("Section->Data Filtersource", filterSource);
    // console.log("Section->title: ", title);
    // console.log("Section->type: ", type);

    // console.log("Section->carouselToggle: ",carouselToggle);
    // console.log("Section->:filters ", filters);
    // console.log("Section->:selectedFilterIndex", selectedFilterIndex);


    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }

    useEffect(() => {
        if(filterSource) {
            filterSource().then((response) => {
                const {data} = response;
                setFilters([...filters, ...data]);
                // console.log("Section->: After Api Call ",data);
            });
        }
    }, []);
    
    

    const showFilters = filters.length > 1;
    const cardToRender = data.filter((card) => 
        showFilters && selectedFilterIndex !== 0 ? 
            card.genre.key === filters[selectedFilterIndex].key 
            : card);

    // console.log("Section->:ShowFilters ", showFilters);
    // console.log("Section->:cardToRender ", cardToRender);

    return (
        <Box >
            <Box className={styles.header}>
                <h3>{title}</h3>
                {!showFilters && (
                    <h4 className={styles.toggleText} onClick={handleToggle}> {
                    !carouselToggle ? "Collapse All" : "Show All"} </h4>
                )}
            </Box>
            {showFilters && (
                <Box className={styles.filterWrapper}>
                    <Filters 
                        filters={filters}
                        selectedFilterIndex={selectedFilterIndex}
                        setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                </Box>
            )}
            {cardToRender.length === 0 ? 
            (
               <CircularProgress /> 
            ) : (
                <Box className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <Box className={styles.wrapper}>
                            {cardToRender.map((ele) => { 
                                // console.log("Section->: Cards to render: ", ele);
                                return <Card data={ele} type={type} key={ele.id} /> 
                            })}
                        </Box>
                    ) : (
                        <Carousel 
                            data={cardToRender}
                            renderComponent={(data) => <Card data={data} type={type}/>}  
                        />
                    )}
                </Box>
            )}
        </Box>
    )

}

export default Section;