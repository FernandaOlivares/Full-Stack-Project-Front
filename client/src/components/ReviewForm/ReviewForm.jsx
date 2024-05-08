/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postNewReview, getAllReviews } from '../../redux/actions/index.jsx';

import ReviewAlert from '../Alerts/ReviewAlert.jsx';
import ErrorReviewAlert from '../Alerts/ErrorReviewAlert.jsx';
import ReviewFormStars from '../ReviewFormStars/ReviewFormStars.jsx';

import styles from '../ReviewForm/ReviewForm.module.css';

const ReviewForm = ({ propertyId, onClose }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const userInfo = user.user;

  const [input, setInput] = useState({
    propertyId: parseInt(propertyId),
    UserId: userInfo.id,
    score: 0,
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
  };

  return (
    <div className={styles.reviewFormContainer}>
      <div>
        <h1>Reseña</h1>
      </div>
      <div className={styles.userContainer}>
        <img className={styles.userImage} src={userInfo.imageDefault} alt="User Avatar" />
        <p className={styles.userName}>{userInfo.name}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.descriptionContainer}>
          <label htmlFor="score">¿Qué te pareció la propiedad?</label>
          <ReviewFormStars selected={input.score >= 1} onSelect={() => setInput((prevInput) => ({ ...prevInput, score: 1 }))} />
          <ReviewFormStars selected={input.score >= 2} onSelect={() => setInput((prevInput) => ({ ...prevInput, score: 2 }))} />
          <ReviewFormStars selected={input.score >= 3} onSelect={() => setInput((prevInput) => ({ ...prevInput, score: 3 }))} />
          <ReviewFormStars selected={input.score >= 4} onSelect={() => setInput((prevInput) => ({ ...prevInput, score: 4 }))} />
          <ReviewFormStars selected={input.score >= 5} onSelect={() => setInput((prevInput) => ({ ...prevInput, score: 5 }))} />
        </div>
        <div className={styles.descriptionContainer}>
          <label>Cuéntanos por qué...</label>
          <textarea
            name="description"
            value={input.description}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
