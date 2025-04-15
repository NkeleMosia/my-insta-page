import React from 'react';
import styles from './AppDownloadSection.module.css';

function AppDownloadSection() {
  return (
    <div className={styles.appDownloadSection}>
      <p className={styles.getTheApp}>Get the app.</p>
      <div className={styles.downloadButtons}>
        <a href="#" className={styles.appStore}>
          <img src="/assets/images/app-store-badge.png" alt="App Store" />
        </a>
        <a href="#" className={styles.googlePlay}>
          <img src="/assets/images/google-play-badge.png" alt="Google Play" />
        </a>
      </div>
    </div>
  );
}

export default AppDownloadSection;