import React from 'react';
import styles from './Separator.module.css';

function Separator() {
  return (
    <div className={styles.separatorContainer}>
      <div className={styles.separatorLine}></div>
      <span className={styles.separatorText}>OR</span>
      <div className={styles.separatorLine}></div>
    </div>
  );
}

export default Separator;