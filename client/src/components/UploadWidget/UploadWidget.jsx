/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

import styles from './UploadWidget.module.css'

function UploadWidget({ handleImageUpload }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'cloudfilesfol',
      uploadPreset: 'presetPropertiesImagesPYD'
    }, function (error, result) {
      if (!error && result && result.event === "success") {
        const imageUrl = result.info.secure_url; // Obtener el enlace de la imagen subida
        handleImageUpload([imageUrl]); // Llamar a la función de devolución de llamada con el enlace de la imagen
      }
    });
  }, [handleImageUpload]);

  return (
    <>
      <div>
        <div>
          <button className={styles.uploadPicturesButton} type='button' onClick={() => widgetRef.current.open()}>Cargar Fotos</button>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

export default UploadWidget;
