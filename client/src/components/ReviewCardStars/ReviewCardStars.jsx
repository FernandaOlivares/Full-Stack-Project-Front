/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewCardStars = ({ score }) => {
  const stars = [];
  
  // Renderizar la cantidad correcta de estrellas según el puntaje
  for (let i = 0; i < score; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} color="#FFD700" />
    );
  }
  
  return (
    <div>
      {stars}
    </div>
  );
}

export default ReviewCardStars;
