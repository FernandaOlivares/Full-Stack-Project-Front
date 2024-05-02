import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const ErrorUserEditedAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `¡Error de Edición!`,
        html: `El usuario no ha sido actualizado, inténtalo nuevamente.`,
        showConfirmButton: true,
        confirmButtonColor: "#b70303",
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default ErrorUserEditedAlert;
