/* eslint-disable react/prop-types */
import styles from './Card.module.css';

function Card({property}) {
  const{id, title, zone, bedrooms, bathrooms, price, imageDefault} = property;
    return (
      <>
        <div className={styles.card}>
        <h3>Comuna:</h3>
        <h3>{title}</h3>
        <h3>Precio:</h3>
        <h3>{id}</h3>
        </div>
      </>
    )
  }
  
  export default Card;
  