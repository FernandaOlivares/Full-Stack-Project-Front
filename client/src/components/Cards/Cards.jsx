/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import styles from './Cards.module.css';

function Cards({ allProperties, currentPage, pageSize }) {
  // Filtrar las propiedades activas
  const activeProperties = allProperties.filter(property => property.isActive === true);
// console.log(activeProperties);
  // Calcular el rango de propiedades a mostrar según la paginación
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const propertiesToShow = activeProperties.slice(startIndex, endIndex);

  return (
    <div className={styles.cardsContainer}>
      {allProperties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
}

export default Cards;
