import React from 'react';
import BillboardSettings from '../BillboardSettings';
import Notifications from '../Notifications';
import Search from '../Search';
import UserMenu from '../UserMenu';
import styles from './SecondaryNavigation.module.css';



const SecondaryNavigation = () => {
    return (
        <div className={styles.box}>
            <div className={styles.navItem}>
                <Search />
            </div>
            <div className={styles.navItem}>
                <Notifications />
            </div>
            <div className={styles.navItem}>
                <UserMenu />
            </div>
            <div className={styles.navItem}>
                <BillboardSettings />
            </div>
        </div>
    );
};

export default SecondaryNavigation;