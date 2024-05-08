/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './ReviewCard.module.css';

function ReviewCard({ review }) {
  const { score, description, UserId } = review;
  
  return (
    <div className={styles.card}>
      <h3>{score}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ReviewCard;
