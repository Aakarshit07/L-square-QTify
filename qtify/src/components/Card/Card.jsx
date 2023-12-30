import styles from "./Card.module.css"; 
import { Chip } from "@mui/material"
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

function Card({data, type}) {
    // console.log("Card: Data",data)
    // console.log("Card: type", type)
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, title, follows, songs, slug} = data
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`} >
                        <div className={styles.wrapper} >
                            <div className={styles.card}>
                                <img src={image} alt="Song" loading="lazy" />
                                <div className={styles.banner}>
                                    <div className={styles.pill}>
                                        <Chip 
                                           label={`${follows} Follows`}
                                            size="small"
                                            className={styles.chip}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                        </Link>
                    </Tooltip>
                )
            }
            case "songs": {
                const { image, likes, title} = data
                // console.log("Card->:Image ",image);
                // console.log("Card->:likes ",likes)
                // console.log("Card->:title ",title)
                return (
                    <div className={styles.wrapper} >
                        <div className={styles.card}>
                            <img src={image} alt="Song" loading="lazy" />
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
            default: return <></>
        }
    }

    // we can also reeturn function when function has an view element
    return getCard(type);
}

export default Card;