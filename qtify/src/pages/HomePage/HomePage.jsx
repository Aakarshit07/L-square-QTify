import { useOutletContext } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
function HomePage() {
    const {data} = useOutletContext()
    const {topAlbums, newAlbums, songs } = data;

    return (
        <>
            <HeroSection />
            <div className={styles.wrapper}>
                <Section title="Top Alnums" data={topAlbums} type="album" />
                <Section title="New Alnums" data={newAlbums} type="album" />
                
                {/* <Section title="Songs" data={songs} type="songs" /> */}
            </div>
        </>
    )


}

export default HomePage;