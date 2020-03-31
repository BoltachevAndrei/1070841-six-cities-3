import * as React from 'react';
import {RATINGS} from '../../const';

interface Props {
  isFormdataValid: boolean;
  isPostingComment: boolean;
  rating: string;
  review: string;
  onChange: () => void;
  onSubmit: () => void;
}

const ReviewsForm: React.FunctionComponent<Props> = (props: Props) => {
  const {
    isFormdataValid,
    isPostingComment,
    rating,
    review,
    onChange,
    onSubmit
  } = props;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((element, index, array) => {
          return (
            <React.Fragment key={element.id}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={array.length - index}
                id={element.id}
                type="radio"
                onChange={onChange}
                disabled={isPostingComment}
                checked={Number.parseInt(rating, 10) === (array.length - index)}
              />
              <label htmlFor={element.id} className="reviews__rating-label form__rating-label" title={element.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
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

export default ReviewsForm;
