import React from 'react';
import styles from './BillboardSettings.module.css';
import SettingsIcon from './SettingsIcon';


const BillboardSettings = () => {
    return (
        <div className={styles.BillboardSettings}>
            <SettingsIcon />
        </div>
    );
};

export default BillboardSettings;