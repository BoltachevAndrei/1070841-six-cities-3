import React from 'react';
import PropTypes from 'prop-types';

const MAX_RATING = 5;

const Rating = ({rating, type}) => {
  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{width: `${rating * 100 / MAX_RATING}%`}}></span>
        <span className="visually-hidden">{rating}</span>
      </div>
      {type === `property` &&
        <span className="property__rating-value rating__value">{rating}</span>
      }
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Rating;
