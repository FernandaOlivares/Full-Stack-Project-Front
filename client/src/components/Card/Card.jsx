/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({property}) {
  const{id, name, zone, bedrooms, bathrooms, price, imageDefault} = property;
    return (
      <>
        <div className={styles.card}>
        <Link to={`home/${id}`}>
        <h3>Comuna:</h3>
        <h3>{name}</h3>
        <h3>Precio:</h3>
        <h3>{id}</h3>
        </Link>
        </div>
      </>
    )
  }
  
  export default Card;
  