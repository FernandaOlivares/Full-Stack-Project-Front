/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAllReviews } from '../../redux/actions/index.jsx';

import ReviewCard from '../ReviewCard/ReviewCard';
import styles from './ReviewCards.module.css';

function ReviewCards() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const allReviews = useSelector((state)=>state.allReviews)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllReviews()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);


/*useEffect(() => {
  if (Array.isArray(allReviews)) {
    const filteredReviews = allReviews.filter((review) => review.propertyId === parseInt(id)) ?? [];
    console.log('ARRAY Filtered:', filteredReviews);
  } else {
    console.log('allReviews is not an array:', allReviews);
  }
}, [allReviews, id]);*/


  console.log('All reviews before filtering:', allReviews);
  const filteredReviews = allReviews?.filter((review) => review.propertyId === parseInt(id)) ?? [];

  console.log('Filtered reviews:', filteredReviews);
  return (
    <div className={styles.reviewCardsContainer}>
      {filteredReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewCards;
