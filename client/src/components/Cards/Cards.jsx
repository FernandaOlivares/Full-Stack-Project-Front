/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import styles from './Cards.module.css';
  
 function Cards({ allProperties, currentPage, pageSize }) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const propertiesToShow = allProperties.slice(startIndex, endIndex);

  return (
    <>
      <div className={styles.cardsContainer}>
        {propertiesToShow.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}

export default Cards;



