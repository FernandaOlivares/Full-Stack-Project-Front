/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import imgNotFound from '../../assets/imgNotFound.png';

function Card({property}) {
  const {id, category, type, city, zone, bedrooms, bathrooms, price, imageDefault} = property;
  console.log('Propiedad:', property);
  console.log('imageDefault:', imageDefault);
  return (
    <div className={styles.card}>
      <Link to={`${id}`}>
        <div>
          {imageDefault ? (
            <img
              className={styles.imageFilter}
              src={imageDefault}
              alt={`Imagen de la propiedad`}
            />
          ) : (
            <img
              className={styles.imageFilter}
              src={imgNotFound}
              alt={`Imagen no encontrada`}
            />
          )}
        </div>
        <p>{category}</p>
        <h3>{type} en las {city}, {zone}</h3>
        <h3>{bedrooms} Dormitorios - {bathrooms} Baños</h3>
        <h3>${price}</h3>
      </Link>
    </div>
  );
}
  
export default Card;
