import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const ErrorPropertyEditedAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `¡Ha ocurrido un error!`,
        html: `La reseña de la propiedad no ha sido guardada, inténtalo nuevamente.`,
        showConfirmButton: true,
        timer: 5000,
        confirmButtonColor: "#b70303",
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default ErrorPropertyEditedAlert;
