/* eslint-disable react/prop-types */
import AdminCard from '../AdminCard/AdminCard.jsx';
import styles from './AdminCards.module.css';

function AdminCards({ allProperties, currentPage, pageSize }) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const propertiesToShow = allProperties.slice(startIndex, endIndex);
  
    return (
      <>
        <div className={styles.adminCardsContainer}>
          {allProperties.map((property) => (
            <AdminCard key={property.id} property={property} />
          ))}
        </div>
      </>
    );
  }
  
  export default AdminCards;
  
