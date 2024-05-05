/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { editProperty } from '../../../redux/actions/index.jsx';

import styles from './AdminCard.module.css';
import imgNotFound from '../../../assets/imgNotFound.png';
import { formatPrice } from '../../../utils/priceFormat.js';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter.js';

function AdminCard({ property }) {
  const { id, category, type, city, zone, address, bedrooms, bathrooms, price, imageDefault } = property;
  const dispatch = useDispatch();
  const formattedPrice = formatPrice(price);
  const [isActive, setIsActive] = useState(property.isActive);
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

  const handleChange = async () => {
    property.isActive = !property.isActive;
    setIsActive(!isActive);
    dispatch(editProperty(id, property));
  };

  return (
    <div className={styles.adminCardContainer}>
<div className={styles.fullImageContainer}>
        <div className={styles.imageContainer}>
        <Link to={`/home/${id}`}>
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
        <div className={styles.arrowContainer}>
          <div className={styles.prevArrow} onClick={prevImage}>&#10094;</div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.nextArrow} onClick={nextImage}>&#10095;</div>
        </div>
        </div>
        </div>
        <div className={styles.infoContainer}>
        <p>#{id} </p>
        <p>{typeCapitalize} en {categoryCapitalize} </p>
        <h3>{address},</h3>
        <h3>{zone}, {city}</h3>
        <h3>{bedrooms} Dormitorios - {bathrooms} Baños</h3>
        <h3>{formattedPrice}</h3>
        </div>
        <div className={styles.buttonsContainer}>
        <Link to={`/home/${id}`}><button>Ver</button></Link>
        <Link to={`/admin/editProperty/${id}`}><button>Editar</button></Link>
        <button onClick={handleChange}>
          {isActive ? 'Desactivar' : 'Activar'}
        </button>
        </div>
    </div>
  );
}

export default AdminCard;
