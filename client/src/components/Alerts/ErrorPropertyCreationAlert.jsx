import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const ErrorPropertyCreationAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `¡Error de Publicación!`,
        html: `La propiedad no ha sido publicada, inténtalo nuevamente.`,
        showConfirmButton: true,
        confirmButtonColor: "#b70303",
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default ErrorPropertyCreationAlert;
