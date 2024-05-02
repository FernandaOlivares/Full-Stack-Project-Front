/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import imgNotFound from '../../assets/imgNotFound.png';
import { formatPrice } from '../../utils/priceFormat.js';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js';

function Card({ property }) {
  const { id, category, type, city, zone, bedrooms, bathrooms, price, imageDefault, isActive } = property;
  
  const formattedPrice = formatPrice(price);

  const typeCapitalize = capitalizeFirstLetter(type);
  const categoryCapitalize = capitalizeFirstLetter(category);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === imageDefault.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageDefault.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.card}>

        <div className={styles.imageContainer}>
        <Link to={`${id}`}>
          {imageDefault.length > 0 ? (
            <>
 
              <img
                className={styles.imageFilter}
                src={imageDefault[currentImageIndex]}
                alt={`Imagen de la propiedad`}
              />

            </>
          ) : (
            <img
              className={styles.imageFilter}
              src={imgNotFound}
              alt={`Imagen no encontrada`}
            />
          )}
          </Link>
        </div>
        <div className={styles.arrowContainer}>
          <div className={styles.prevArrow} onClick={prevImage}>&#10094;</div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.nextArrow} onClick={nextImage}>&#10095;</div>
        </div>
        <p>{categoryCapitalize} - {isActive ? "Disponible" : "No Disponible"}</p>
        <h3>{typeCapitalize} | {zone} | {city}</h3>
        <h3>{bedrooms} Dormitorios - {bathrooms} Baños</h3>
        <h3>{formattedPrice}</h3>
    </div>
  );
}

export default Card;
