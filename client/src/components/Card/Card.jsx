/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'; // Importa useState
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/priceFormat.js';
import styles from './Card.module.css';
import imgNotFound from '../../assets/imgNotFound.png';

function Card({ property }) {
  const { id, category, type, city, zone, bedrooms, bathrooms, price, imageDefault } = property;
  const formattedPrice = formatPrice(price);

  // Estado para controlar el índice de la imagen actual en el carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para cambiar a la siguiente imagen en el carrusel
  const nextImage = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento
    setCurrentImageIndex((prevIndex) => (prevIndex === imageDefault.length - 1 ? 0 : prevIndex + 1));
  };

  // Función para cambiar a la imagen anterior en el carrusel
  const prevImage = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageDefault.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.card}>

        <div className={styles.imageContainer}>
          {imageDefault.length > 0 ? (
            <>
             <Link to={`${id}`}>
              <img
                className={styles.imageFilter}
                src={imageDefault[currentImageIndex]}
                alt={`Imagen de la propiedad`}
              />
              </Link>
              {/* Contenedor para las flechas */}
             
            </>
          ) : (
            <img
              className={styles.imageFilter}
              src={imgNotFound}
              alt={`Imagen no encontrada`}
            />
          )}
        </div>
        <div className={styles.arrowContainer}>
          <div className={styles.prevArrow} onClick={prevImage}>&#10094;</div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.nextArrow} onClick={nextImage}>&#10095;</div>
        </div>
        <p>{category}</p>
        <h3>{type} | {zone} | {city}</h3>
        <h3>{bedrooms} Dormitorios - {bathrooms} Baños</h3>
        <h3>{formattedPrice}</h3>
    </div>
  );
}

export default Card;
