import Card from '../Card/Card';

import styles from './Cards.module.css';

function Cards() {

    return (
      <>
        <div className={styles.cardsContainer}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
      </>
    )
  }
  
  export default Cards;
  