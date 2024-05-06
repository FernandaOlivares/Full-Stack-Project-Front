import Swal from 'sweetalert2';
import styles from './Alert.module.css';


const UserEditedAlert = (userName) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `¡Felicitaciones!`,
        html: `El usuario <b>"${userName}"</b> ha sido editado exitosamente.`,
        showConfirmButton: false,
        timer: 5000,
        customClass: {
          popup: styles.alertPopup,
      },
      });
};

export default UserEditedAlert;
