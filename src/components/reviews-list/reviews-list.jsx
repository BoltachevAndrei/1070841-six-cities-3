import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item.jsx';

const ReviewsList = ({reviews}) => {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <ReviewsItem key={review.id} review={review}/>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
