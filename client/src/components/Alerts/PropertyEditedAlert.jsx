import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const PropertyEditedAlert = (propertyTitle) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `¡Felicitaciones!`,
        html: `La propiedad <b>"${propertyTitle}"</b>,ha sido editada exitosamente.`,
        showConfirmButton: false,
        timer: 5000,
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default PropertyEditedAlert;
