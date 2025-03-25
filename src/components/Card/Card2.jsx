import React from 'react';
// import './styles.css';
// import styles from './Card.module.css';
import styles from './Card.module.sass';

const Card2 = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
export default Card2;