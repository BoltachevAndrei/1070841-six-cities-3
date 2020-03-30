import * as React from 'react';
import Rating from '../rating/rating';
import {Comment} from '../../types';

const MONTHES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

interface Props {
  review: Comment;
}

const ReviewsItem: React.FunctionComponent<Props> = (props: Props) => {
  const {review} = props;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating
          type="reviews"
          rating={review.rating}
        />
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.date.toISOString().slice(0, 10)}>{`${MONTHES[review.date.getMonth()]} ${review.date.getFullYear()}`}</time>
      </div>
    </li>
  );
};

export default ReviewsItem;
