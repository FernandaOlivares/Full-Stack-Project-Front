/* eslint-disable react/prop-types */
import Card from '../Card/Card';

import styles from './Cards.module.css';

function Cards({allProperties}) {
  const propertyList = allProperties;

    return (
      <>
        <div className={styles.cardsContainer}>
          {propertyList?.map((property)=> (
          <Card key={property.id} property={property}/>
          ))}
        </div>
      </>
    )
  }
  
  export default Cards;
  