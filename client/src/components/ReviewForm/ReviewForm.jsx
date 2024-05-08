/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postNewReview, getAllReviews } from '../../redux/actions/index.jsx'

import ReviewAlert from '../Alerts/ReviewAlert.jsx';
import ErrorReviewAlert from '../Alerts/ErrorReviewAlert.jsx';

import styles from '../ReviewForm/ReviewForm.module.css';


const ReviewForm = ({propertyId, onClose}) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'))
  const userInfo = user.user

  const [input, setInput] = useState({
    propertyId: parseInt(propertyId),
    UserId: userInfo.id,
    score: parseInt(5),
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const validateFormInput = (userInfo) => {
    userInfo
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateFormInput(input);

    if (isValid) {
      try {
        const inputData = { ...input, score: parseInt(input.score) };
        await dispatch(postNewReview(inputData));
        ReviewAlert(userInfo.name);
        dispatch(getAllReviews());
        onClose();
      } catch (error) {
        console.error('Error al guardar la reseña de la propiedad:', error);
        ErrorReviewAlert();
      }
    } else {
      console.log('Los datos del formulario no son válidos');
    }
  };

  return (
    <div className={styles.reviewFormContainer}>
      <div><h1>Reseña</h1></div>
      <div className={styles.userContainer}>
        <img
          className={styles.userImage}
          src={userInfo.imageDefault}
          alt="User Avatar"
        />
        <p className={styles.userName}>{userInfo.name}</p>
      </div>
    <form onSubmit={handleSubmit}>
      <div className={styles.descriptionContainer}>
        <label htmlFor="score">Estrellas:</label>
        <select name="score" value={input.score} onChange={handleChange}  className={styles.selectButton}>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <div className={styles.descriptionContainer}>
        <label>Reseña:</label>
        <textarea name="description" value={input.description} onChange={handleChange}className={styles.textarea}></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
    </div>
  );
};

export default ReviewForm;
