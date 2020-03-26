import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Rating} from '../../const.js';

const ReviewsForm = (props) => {
  const {
    isFormdataValid,
    isPostingComment,
    rating,
    review,
    onChange,
    onSubmit
  } = props;

  const ratingKeys = Object.keys(Rating).sort((prev, next) => next - prev);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingKeys.map((element) => {
          return (
            <Fragment key={element}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={element}
                id={Rating[element].id}
                type="radio"
                onChange={onChange}
                disabled={isPostingComment}
                checked={rating === element}
              />
              <label htmlFor={Rating[element].id} className="reviews__rating-label form__rating-label" title={Rating[element].title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={onChange}
        disabled={isPostingComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isPostingComment || !isFormdataValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  id: PropTypes.number.isRequired,
  isPostingComment: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  isFormdataValid: PropTypes.bool.isRequired
};

export default ReviewsForm;
