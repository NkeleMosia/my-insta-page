import React from 'react';
import styles from './FooterLinks.module.css';

function FooterLinks() {
  return (
    <ul className={styles.footerLinks}>
      <li><a href="#">Meta</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Top Accounts</a></li>
      <li><a href="#">Hashtags</a></li>
      <li><a href="#">Locations</a></li>
      <li><a href="#">Instagram Lite</a></li>
    </ul>
  );
}

export default FooterLinks;