/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/priceFormat.js';
import styles from './AdminCard.module.css';
import imgNotFound from '../../../assets/imgNotFound.png';

function AdminCard({ property }) {
  console.log(property);
  const { id, category, type, city, zone, address, bedrooms, bathrooms, price, imageDefault } = property;
  const [isLoading, setIsLoading] = useState(true);
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

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const BASE_URL = import.meta.env.VITE_ENV === 'production'
      ? import.meta.env.VITE_BACKEND_URL_PRODUCTION
      : import.meta.env.VITE_BACKEND_URL_LOCAL;

      // Realiza una solicitud HTTP PUT al endpoint correspondiente en tu backend
      const response = await axios.put(`${BASE_URL}/update/${id}`);
    
      console.log(response.data); // Imprime la respuesta del servidor en la consola
      // Aquí puedes agregar cualquier lógica adicional, como mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.log('Error updating property:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
    setIsLoading(false);
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
        <p>{type} en {category} </p>
        <h3>{address},</h3>
        <h3>{zone}, {city}</h3>
        <h3>{bedrooms} Dormitorios - {bathrooms} Baños</h3>
        <h3>{formattedPrice}</h3>
        </div>
        <div className={styles.buttonsContainer}>
        <Link to={`/admin/editProperty/${id}`}><button>Editar</button></Link>
        <button onClick={handleDelete}>Eliminar</button>
        </div>
    </div>
  );
}

export default AdminCard;
