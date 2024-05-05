import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const ErrorUserCreationAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `¡Error de Publicación!`,
        html: `La propiedad no ha sido publicada, inténtalo nuevamente.`,
        showConfirmButton: true,
        timer: 5000,
        confirmButtonColor: "#b70303",
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default ErrorUserCreationAlert;
