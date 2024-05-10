/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReviewCardStars from '../ReviewCardStars/ReviewCardStars.jsx';
import { getAllUsers } from '../../redux/actions/index.jsx';

import styles from './ReviewCard.module.css';

function ReviewCard({ review }) {
  const { score, description, UserId } = review;
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllUsers()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && allUsers.length > 0) {
      const foundUser = allUsers.find((user) => user.id === UserId);
      setUser(foundUser);
    }
  }, [isLoading, allUsers, UserId]);

  return (
    <div className={styles.card}>
      {user && (
        <div className={styles.userContainer}>
          {/*user.imageDefault && user.imageDefault.length > 0 && (
            <img src={user.imageDefault[0]} alt={user.name} className={styles.userImage}/>
          )*/}
          <h4>{user.name}</h4>
        </div>
      )}
      <ReviewCardStars score={score} />
      <p>{description}</p>
    </div>
  );
}

export default ReviewCard;
