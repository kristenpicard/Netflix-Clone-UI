import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import styles from './SocialLinks.module.css';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';



const SocialLinks = () => {
    return (
        <div className={styles.box}>
            <a href="https://www.facebook.com/" className={styles.iconLink}>
                <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/" className={styles.iconLink}>
                <InstagramIcon />
            </a>
            <a href="https://twitter.com/?lang=en" className={styles.iconLink}>
                <TwitterIcon />
            </a>
            <a href="https://www.youtube.com/" className={styles.iconLink}>
                <YoutubeIcon />
            </a>
        </div>
    );
};

export default SocialLinks;