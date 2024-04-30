import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const ErrorPropertyEditedAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `¡Error de Edición!`,
        html: `La propiedad no ha sido actualizada, inténtalo nuevamente.`,
        showConfirmButton: true,
        confirmButtonColor: "#b70303",
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default ErrorPropertyEditedAlert;
