import React from 'react';
import billboardHeroTitle from './assets/billboard-title.webp';
import billboardHeroImg from './assets/billboard.webp';
import styles from './Billboard.module.css';

const Billboard = () => {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt="" />
                <div className={styles.info}>
                    <img src={billboardHeroTitle} alt="Abstract: The Art of Design" />
                </div>
            </div>
        </div>
    )
}

export default Billboard;