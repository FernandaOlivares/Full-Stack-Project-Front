/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './ImagesSlider.module.css';

function ImagesSlider({images}) {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isLoading, setIsLoading] = useState(true);

  const selectNewImage = (index) => {
    setIsLoading(true);
    setTimeout(() => {
    setSelectedIndex(index);
    setSelectedImage(images[index]);
  }, 400);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const prevImage = () => {
    const newIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    selectNewImage(newIndex);
  }; 

  const nextImage = () => {
    const newIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    selectNewImage(newIndex);
  }; 

  return (
    <div className={styles.imagesSliderContainer}>
      <img
        src={selectedImage}
        alt='Imagen de la Propiedad'
        className={`${styles.sliderImage} ${isLoading ? styles.imageLoading : ''}`}
        onLoad={handleImageLoad}
      />
      <div className={styles.arrowContainer}>
          <div className={styles.prevArrow} onClick={prevImage}>&#10094;</div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.nextArrow} onClick={nextImage}>&#10095;</div>
        </div>
    </div>
  );
}

export default ImagesSlider;
