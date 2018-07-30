import React, { PropTypes } from 'react';

// Import Style
import styles from './Note.css';

const Note = props =>
  <li className={styles.Note}>{props.children}</li>;

Note.propTypes = {
  children: propTypes.any,
};

export default Note;
