import { useOutletContext } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import { fetchFilters } from "../../api/api";
function HomePage() {
    const {data} = useOutletContext()
    const {topAlbums, newAlbums, songs } = data;
    // console.log("HomePageData topAlbums", topAlbums);
    // console.log("HomePageData newAlbums", newAlbums)
    // console.log("HomePageData songs", songs);
    return (
        <>
            <HeroSection />
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Section 
                    title="Songs" 
                    data={songs} 
                    filterSource={ fetchFilters } 
                    type="songs" 
                />
            </div>
        </>
    )


}

export default HomePage;