import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const PropertyCreatedAlert = (propertyTitle) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `¡Felicitaciones!`,
        html: `La propiedad <b>"${propertyTitle}"</b>,ha sido publicada exitosamente.`,
        showConfirmButton: false,
        timer: 4000,
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default PropertyCreatedAlert;
