import styles from './Card.module.css';

function Card() {

    return (
      <>
        <div className={styles.card}>
        <h3>Soy una Card</h3>
        <h2>Comuna:</h2>
        <h3>Precio:</h3>
        </div>
      </>
    )
  }
  
  export default Card;
  