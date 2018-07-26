import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ backgroundImage : `url(${bg})` }} className={styles.footer}>
      <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/" target="_Blank">blog</a></p>
    </div>
  );
}

export default Footer;
