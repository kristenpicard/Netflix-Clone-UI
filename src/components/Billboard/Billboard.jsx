import React from 'react';
import billboardHeroTitle from './assets/billboard-title.webp';
import billboardHeroImg from './assets/billboard.webp';
import styles from './Billboard.module.css';
import InfoIcon from './InfoIcon';
import PlayIcon from './PlayIcon';

const Billboard = () => {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt="" />
                <div className={styles.fadeOut}></div>
                <div className={styles.info}>
                    <img src={billboardHeroTitle} alt="Abstract: The Art of Design" />
                    <div className={styles.description}>
                        Step inside the minds of the most innovative designers in a variety of disciplines and learn how
                        design impacts every aspect of life.
                    </div>
                    <div className={styles.links}>
                    <a href="/">
                        <PlayIcon />
                        <span>Play</span>
                    </a>
                    <button>
                        <InfoIcon />
                        <span>More Info</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard;